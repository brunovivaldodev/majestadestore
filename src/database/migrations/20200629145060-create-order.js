module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('orders',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true,
      },
      cancel: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      paymemt_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'payments',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      delivery_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'deliveries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

  down: (queryInterface) => queryInterface.dropTable('orders'),
};
