'use strict';
const bcrypt = require('bcrypt');

const { customers } = require('../../constants/seedersInfo');
const db = require('../models/index');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedCustomers = await Promise.all(
      customers.map(async (customer) => {
        return {
          ...customer,
          password: await bcrypt.hash(customer.password, 10),
        };
      })
    );
    await queryInterface.bulkInsert('customers', hashedCustomers, {});
    // Hashing seed passwords through model
    // await db.Customer.bulkCreate(customers)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  },
};
