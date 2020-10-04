'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Board',{
      id:{
        type:Sequelize.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true,
      },
      userId:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      boardId:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      name:{
        type:Sequelize.STRING(255),
        allowNull: false
      },
      order:{
        type:Sequelize.FLOAT,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
    },{
        charset: 'utf8mb4'
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Board');
  }
};
