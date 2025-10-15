'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Order, {
        foreignKey: 'customer_id', 
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'
      })
    }
  }
  Customer.init({
    full_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, 
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    underscored: true,
  });
  return Customer;
};