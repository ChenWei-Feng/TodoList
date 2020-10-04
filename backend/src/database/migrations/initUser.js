'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('User',{
      id:{
        type:Sequelize.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true,
      },
      name:{
        type:Sequelize.STRING(50),
        allowNull:false
      },
      password:{
        type:Sequelize.STRING(32),
        allowNull:false
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
  }, {
        charset:'utf8mp4'
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};
