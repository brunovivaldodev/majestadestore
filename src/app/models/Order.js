const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init() {
    super.init({
      cancel: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  }
}

module.exports = Order;
