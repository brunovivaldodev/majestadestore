module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('stores',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      telephone: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
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

  down: (queryInterface) => queryInterface.dropTable('stores'),
};
