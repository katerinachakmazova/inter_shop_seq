'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      // define association here
    }
  }
  Brand.init({
    title: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true,
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Brand',
    tableName: 'brands',
    underscored: true,
  });
  return Brand;
};