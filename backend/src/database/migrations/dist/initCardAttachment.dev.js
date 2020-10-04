"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('CardAttachment', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      boardListCardId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      attachmentId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      isCover: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }, {
      charset: 'utf8mb4'
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('CardAttachment');
  }
};