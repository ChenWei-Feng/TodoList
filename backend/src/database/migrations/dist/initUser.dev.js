'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", queryInterface.createTable('User', {
              id: {
                type: Sequelize.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
              },
              name: {
                type: Sequelize.STRING(50),
                allowNull: false
              },
              password: {
                type: Sequelize.STRING(32),
                allowNull: false
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
              charset: 'utf8mp4'
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", queryInterface.dropTable('User'));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};