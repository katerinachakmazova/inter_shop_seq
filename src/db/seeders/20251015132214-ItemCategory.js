'use strict';
const { items_categories } = require('../../constants/seedersInfo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items_categories', items_categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items_categories', null, {});
  },
};
