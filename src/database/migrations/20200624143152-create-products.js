'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('products', {
         id: {
           type : Sequelize.INTEGER,
           primaryKey : true,
           allowNull : false,
           autoIncrement : true
            },
          title : {
            type : Sequelize.STRING,
            allowNull : false,
          },
          disponibility : {
            type : Sequelize.BOOLEAN,
            allowNull : false,
            defaultValue : true
          },
          describe : {
            type : Sequelize.TEXT,
            allowNull :false
          },
          quantity : {
            type :Sequelize.INTEGER,
            allowNull : false
          },
           created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
      });
    
  },

  down: (queryInterface) => {
    
      return queryInterface.dropTable('products');
    
  }
};
