const Sequelize = require('sequelize');

const User = require('../app/models/User');
const Store = require('../app/models/Store');

const { development } = require('../config/database');

const connection = new Sequelize(development);

User.init(connection);
Store.init(connection);

module.exports = connection;
