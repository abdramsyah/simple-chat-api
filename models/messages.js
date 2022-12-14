'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  messages.init({
    conversationId: DataTypes.STRING,
    sender: DataTypes.STRING,
    text: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'messages',
  });
  return messages;
};