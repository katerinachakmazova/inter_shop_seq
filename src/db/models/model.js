'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Models extends Model {
    static associate(models) {
      Models.belongsTo(models.Brand, {
        foreignKey: 'brand_id',
        onDelete: 'CASCADE'
      });
      Models.hasMany(models.Item, {
        foreignKey: 'model_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Models.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: DataTypes.TEXT,
      brand_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Models',
      tableName: 'models',
      underscored: true,
    }
  );
  return Models;
};
