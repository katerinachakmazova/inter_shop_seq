'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    type_id: DataTypes.INTEGER,
    model_id: DataTypes.INTEGER,
    price: DataTypes.NUMERIC,
    store_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
    tableName:'items',
    underscored: true,
  });
  return Item;
};