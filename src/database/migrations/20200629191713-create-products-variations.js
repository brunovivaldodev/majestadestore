module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('products_variations', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    disponibility: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    describe: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    promitional_price: {
      type: Sequelize.INTEGER,
    },
    photos: {
      type: Sequelize.ARRAY(Sequelize.STRING),
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

  down: (queryInterface) => queryInterface.dropTable('product_variations'),
};
