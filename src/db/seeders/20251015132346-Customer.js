'use strict';
const bcrypt = require('bcrypt');

const { customers } = require('../../constants/seedersInfo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    customers.forEach((customer) => customer.password = bcrypt.hashSync(customer.password, 10))
    await queryInterface.bulkInsert('customers', customers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  },
};
