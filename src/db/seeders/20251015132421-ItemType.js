'use strict';
const { items_types } = require('../../constants/seedersInfo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('item_types', items_types, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('item_types', null, {});
  },
};
