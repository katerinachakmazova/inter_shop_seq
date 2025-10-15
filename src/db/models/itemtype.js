'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemType extends Model {
    static associate(models) {
      // define association here
    }
  }
  ItemType.init({
    title: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true,
    },
    description: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemType',
    tableName: 'item_types',
    underscored: true,
  });
  return ItemType;
};