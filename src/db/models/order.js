'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, {
        foreignKey:'customer_id'
      })
    }
  }
  Order.init(
    {
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      customer_id: DataTypes.INTEGER,
      date: DataTypes.DATE,
      amount: DataTypes.INTEGER,
      paid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'orders',
      underscored: true,
    }
  );
  return Order;
};
