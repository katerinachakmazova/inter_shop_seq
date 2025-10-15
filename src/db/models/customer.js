'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      // define association here
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