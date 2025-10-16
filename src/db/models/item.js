'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.Models, {
        foreignKey: 'model_id',
        onDelete: 'CASCADE'
      });
      Item.belongsTo(models.ItemType, {
        foreignKey: 'type_id',
        onDelete:'SET NULL'
      });
      Item.belongsTo(models.Store, {
        foreignKey: 'store_id',
        onDelete: 'CASCADE'
      });
      Item.belongsToMany(models.Order, {
        through:'items_orders'
      })
    }
  }
  Item.init(
    {
      type_id: DataTypes.INTEGER,
      model_id: DataTypes.INTEGER,
      price: DataTypes.NUMERIC,
      store_id: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Item',
      tableName: 'items',
      underscored: true,
    }
  );
  return Item;
};
