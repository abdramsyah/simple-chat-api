'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  conversation.init({
    members: DataTypes.ARRAY(DataTypes.STRING),
    // default: [],
    // get: function () {
    //   return this.getDataValue('members').join(', ');
    // },
    // set: function (members) {
    //   members = members || [];
    //   if (typeof members === 'string') {
    //     members = members.split(',').map(function (str) {
    //       return str.trim();
    //     });
    //   }
    //   this.setDataValue('members', members);
    // }
  }, {
    sequelize,
    modelName: 'conversation',
  });
  return conversation;
};