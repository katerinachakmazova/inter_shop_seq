'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Models, {
        foreignKey: 'brand_id', 
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'
      })
    }
  }
  Brand.init({
    title: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true,
    },
    logo:DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Brand',
    tableName: 'brands',
    underscored: true,
  });
  return Brand;
};