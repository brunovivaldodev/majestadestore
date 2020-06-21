'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('client', 
      {
         id: {
           type : Sequelize.INTEGER,
           allowNull : false,
           primaryKey : true,
           autoIncrement :true
        },
        birthday : {
          type : Sequelize.DATE,
          allowNull : true
        },
        telephone: {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
          allowNull: false,
        },
        user_id : {
          type : Sequelize.INTEGER,
          allowNull : false,
          references : {
            model : 'users',
            key : 'id',
            onUpdate:'CASCADE',
            onDelete:'SET NULL'
          }
        }, 
        address: {
          type: Sequelize.JSON,
          allowNull: false,
        },
        deleted :{
          type : Sequelize.BOOLEAN,
          allowNull : false,
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
      return queryInterface.dropTable('client');  
  }
};
