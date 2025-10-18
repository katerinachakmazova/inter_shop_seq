'use strict';
const bcrypt = require('bcrypt');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Order, {
        foreignKey: 'customer_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Customer.init(
    {
      full_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue('password', bcrypt.hashSync(value, 10));
        },
      },
    },
    {
      sequelize,
      modelName: 'Customer',
      tableName: 'customers',
      // Hashing seed passwords through model
      // hooks: {
      //   beforeBulkCreate: async (customers) => {
      //     await Promise.all(
      //       customers.map(async (customer) => {
      //         return {
      //           ...customer,
      //           password: await bcrypt.hash(customer.password, 10),
      //         };
      //       })
      //     );
      //   },
      // },
      underscored: true,
    }
  );
  return Customer;
};
