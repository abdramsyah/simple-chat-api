const Op = require('sequelize').Op;
const { messages, conversation, user } = require('../models')
const { searchBy, getPagination, getPagingData, searchByKota } = require('../helpers/generalHelper');

class MessageController {
  static async getAll(req, res, next) {
    try {
      const { idUser } = req.query

      // get convertation
      const listConversation = await conversation.findAndCountAll();
      let cnv = listConversation.rows;
      let tmpConversation = [];
      let tmpconve = [];

      // tmp id friend convertation
      for (let i = 0; i < cnv.length; i++) {
        cnv[ i ].members.forEach(e => {
          if (idUser != e) {
            tmpConversation.push(e);
          }
        });
      }
      // get nama friend 
      for (let i = 0; i < tmpConversation.length; i++) {
        let id = tmpConversation[ i ];
        console.log(tmpConversation)
        console.log(tmpConversation[ i ])
        console.log(id)
        // const findUser = await user.findOne({ where: { id: id } });
        const findMessage = await messages.findAll({ where: { sender: id } });
        console.log(findMessage)
        tmpconve.push(findMessage)
      }

      // for

      // response
      return res.status(200).json(tmpconve)
      // return res.status(200).json(listConversation)
    } catch (err) {
      next(err)
    }
  }

  static async createMessage(req, res, next) {
    try {
      const { senderId, receiverId, text } = req.body
      let members = [ senderId, receiverId ];

      // jika text kosong jangan buat percakapan
      if (!text) {
        return res.status(200).json({ pesan: "nothing" })
      }

      // cari semua conversation
      const findConversation = await conversation.findAll()

      let conversationId = '';

      // mencari conversation yang sudah ada
      findConversation.forEach(e => {
        if (e.members.includes(senderId) && e.members.includes(receiverId)) {
          conversationId = e.id;
          return null;
        }
      });

      // jika conversationId null maka buat conversation baru
      if (!conversationId) {
        const save = await conversation.create({ members });
        conversationId = save.id;
      }

      let message = {
        conversationId,
        sender: senderId,
        text,
      }

      // mmebuat messages baru
      const list = await messages.create(
        message
      )

      // response
      return res.status(200).json(list)
    } catch (err) {
      next(err)
    }
  }


  static async getConvertation(req, res, next) {
    try {
      const { conversationId } = req.body
      console.log("sadas")


      const convertation = await messages.findAll({ where: { conversationId: conversationId } });
      // response
      return res.status(200).json(convertation)
      // return res.status(200).json(listConversation)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = {
  MessageController
}