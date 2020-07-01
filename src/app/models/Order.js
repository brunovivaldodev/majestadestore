const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init({
      cancel: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    }, { sequelize });
  }

  static associate(models) {
    Order.belongsTo(models.Client, { foreignKey: 'client_id', as: 'owner' });
    Order.belongsToMany(models.Product, { foreignKey: 'order_id', through: 'products_orders', as: 'products' });
  }
}

module.exports = Order;
