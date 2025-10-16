'use strict';
const { items_categories } = require('../../constants/seedersInfo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('item_categories', items_categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('item_categories', null, {});
  },
};
