'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", queryInterface.createTable('User', {
              //返回promise对象
              id: {
                // 字段类型：数字
                type: Sequelize.INTEGER,
                // 设置为主键
                primaryKey: true,
                // 自动增长
                autoIncrement: true
              },
              name: {
                // 字符串类型（20长度）
                type: Sequelize.STRING(20),
                // 值唯一
                unique: true,
                // 不允许 null 值
                allowNull: false
              },
              password: {
                // 字符串类型（32长度）
                type: Sequelize.STRING(32),
                // 不允许 null 值
                allowNull: false
              },
              createdAt: {
                // 日期类型
                type: Sequelize.DATE,
                // 不允许 null 值
                allowNull: false
              }
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