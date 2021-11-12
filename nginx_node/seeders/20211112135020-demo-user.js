'use strict';
const { v4: uuidv4 } = require('uuid')

const now = new Date()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('People', [
      { id: uuidv4(), name: 'Uzumaki Naruto', createdAt: now, updatedAt: now },
      { id: uuidv4(), name: 'Uchiha Sasuke', createdAt: now, updatedAt: now },
      { id: uuidv4(), name: 'Haruno Sakura', createdAt: now, updatedAt: now },
      { id: uuidv4(), name: 'Rock Lee', createdAt: now, updatedAt: now },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
