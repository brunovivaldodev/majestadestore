const { Model, DataTypes } = require('sequelize');

class Store extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      telephone: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      address: {
        type: DataTypes.JSON,
      },

    }, { sequelize });
  }
}

module.exports = Store;
