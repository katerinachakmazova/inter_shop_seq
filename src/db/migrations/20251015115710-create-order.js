'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.INTEGER, 
        allowNull:false, 
        unique:true
      },
      customer_id: {
        type: Sequelize.INTEGER, 
        references: {
          model: 'customers',
          key:'id'
        }
      },
      date: {
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.INTEGER
      },
      paid: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};