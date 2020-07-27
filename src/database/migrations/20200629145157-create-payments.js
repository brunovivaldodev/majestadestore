module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('payments', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    status: {
      type: Sequelize.ENUM('Done', 'In Process', 'Canceled'),
      allowNull: false,
    },
    order_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'orders',
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

  down: (queryInterface) => queryInterface.dropTable('payments'),
};
