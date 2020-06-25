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
      quantity: {
        type: DataTypes.INTEGER,
      },
    }, { sequelize });
  }

  static associate(models) {
    Product.belongsToMany(models.Categories, { foreignKey: 'product_id', through: 'product_categories', as: 'categories' });
  }
}

module.exports = Product;
