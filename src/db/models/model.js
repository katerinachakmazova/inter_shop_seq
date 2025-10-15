'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model extends Model {
    static associate(models) {
      // define association here
    }
  }
  Model.init({
    title: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true,
    },
    description: DataTypes.TEXT,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Model',
    tableName: 'models',
    underscored: true,
  });
  return Model;
};