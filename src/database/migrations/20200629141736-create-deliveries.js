module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('deliveries',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('Done', 'In Process', 'Canceled'),
        allowNull: false,
      },
      costs: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    }),

  down: (queryInterface) => queryInterface.dropTable('deliveries'),
};
