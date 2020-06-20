const { Model, DataTypes } = require('sequelize');

class User extends Model {
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
      password: DataTypes.STRING,
      permition: {
        type: DataTypes.ENUM('client', 'admin'),
        defaultValue: 'client',
      },

    }, { sequelize });
  }
}

module.exports = User;
