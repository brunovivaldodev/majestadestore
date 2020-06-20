const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const generateToken = (params = {}) => jwt.sign(params, secret, {
  expiresIn: '10 days',
});

module.exports = { generateToken };
