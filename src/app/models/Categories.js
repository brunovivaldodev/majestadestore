const { Model, DataTypes } = require('sequelize');

class Categories extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      disponibility: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    }, { sequelize });
  }

  static associate(models) {
    Categories.belongsToMany(models.Product, { foreignKey: 'categories_id', as: 'products', through: 'product_categories' });
  }
}

module.exports = Categories;
