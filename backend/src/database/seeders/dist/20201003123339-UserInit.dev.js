'use strict';

var crypto = require('crypto');

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var md5 = crypto.createHash('md5');
    var password = md5.update('123456').digest('hex');
    var date = new Date();
    return queryInterface.bulkInsert('User', ['fcw', 'fcy', 'fmc', 'ghy'].map(function (name, index) {
      return {
        id: index + 1,
        name: name,
        password: password,
        createdAt: date,
        updatedAt: date
      };
    }));
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};