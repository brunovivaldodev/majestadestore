const { Model, DataTypes } = require('sequelize');

class productVariation extends Model {
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
    }, { sequelize, tableName: 'products_variations' });
  }

  static associate(models) {
    productVariation.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}

module.exports = productVariation;
