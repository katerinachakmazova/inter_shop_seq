'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCategory extends Model {
    static associate(models) {
      ItemCategory.hasMany(models.ItemType, {
        foreignKey:'category_id', 
        onDelete: 'SET NULL', 
        onUpdate: 'CASCADE'
      })
    }
  }
  ItemCategory.init({
    title: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true,
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ItemCategory',
    tableName: 'items_categories',
    underscored: true,
  });
  return ItemCategory;
};