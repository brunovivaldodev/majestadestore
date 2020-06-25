const Sequelize = require('sequelize');

const User = require('../app/models/User');
const Store = require('../app/models/Store');
const Client = require('../app/models/Client');
const Product = require('../app/models/Product');
const Categories = require('../app/models/Categories');

const { development } = require('../config/database');

const connection = new Sequelize(development);

User.init(connection);
Store.init(connection);
Client.init(connection);
Product.init(connection);
Categories.init(connection);

Client.associate(connection.models);
Product.associate(connection.models);
Categories.associate(connection.models);

module.exports = connection;
