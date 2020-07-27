const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      disponibility: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      describe: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      quantity: {
        type: DataTypes.INTEGER,
      },
    }, { sequelize });
  }

  static associate(models) {
    Product.belongsToMany(models.Categories, { foreignKey: 'product_id', through: 'product_categories', as: 'categories' });
    Product.belongsToMany(models.Order, { foreignKey: 'product_id', through: 'products_orders', as: 'Order' });
  }
}

module.exports = Product;
