'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemsOrders extends Model {

    static associate(models) {
    }
  }
  ItemsOrders.init({
    item_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemsOrders',
    tableName: 'items_orders',
    underscored: true,
    timestamps: false,
  });
  return ItemsOrders;
};