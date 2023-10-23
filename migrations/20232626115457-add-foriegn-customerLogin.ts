'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('customerLogins', {
        type: 'foreign key',
        fields: ['id'],
        references: {
          table: 'customerLogins',
          field: 'customerLoginId'
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('customerLogins', 'id')
  }
};
