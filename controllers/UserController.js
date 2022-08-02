const Op = require('sequelize').Op;
const { user } = require('../models')
const { searchBy, getPagination, getPagingData, searchByKota } = require('../helpers/generalHelper');

class UserController {
  static async getAll(req, res, next) {
    try {
      console.log(req.query)
      const { page, size, kota, kecamatan, kelurahan } = req.query
      const { limit, offset } = getPagination(page, size)
      let condition = searchBy(kota, kecamatan, kelurahan)
      const list = await user.findAndCountAll({
        // where: condition,
        // limit: limit,
        // offset: offset
      })
      const response = getPagingData(list, page, limit)
      return res.status(200).json(list)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = {
  UserController
}