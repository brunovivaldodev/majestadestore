const { Model, DataTypes } = require('sequelize');

class Client extends Model {
  static init(sequelize) {
    super.init({
      birthday: {
        type: DataTypes.DATE,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      telephone: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      address: {
        type: DataTypes.JSON,
      },
    }, { sequelize, tableName: 'client' });
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id', as: 'owner', onUpdate: 'CASCADE', onDelete: 'SET NULL',
    });
  }
}

module.exports = Client;
