'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemType extends Model {
    static associate(models) {
      ItemType.belongsTo(models.ItemCategory, {
        foreignKey: 'category_id',
      });
      ItemType.hasMany(models.Item, {
        foreignKey: 'type_id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
    }
  }
  ItemType.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: DataTypes.TEXT,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ItemType',
      tableName: 'items_types',
      underscored: true,
    }
  );
  return ItemType;
};
