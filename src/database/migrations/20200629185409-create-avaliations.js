module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('avaliations',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      texto: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

    }),

  down: (queryInterface) => queryInterface.dropTable('avaliations'),
};
