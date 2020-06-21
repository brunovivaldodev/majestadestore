const jwt = require('jsonwebtoken');

const { secret } = require('../../config');

const authRequired = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'No Token Provided' });
  }
  const parts = authorization.split(' ');
  if (!parts.length === 2) {
    return res.status(401).json({ error: 'Token error' });
  }
  const [schema, token] = parts;

  if (!/^Ecommerce$/i.test(schema)) {
    return res.status(401).json({ error: 'Token Malformated' });
  }
  // eslint-disable-next-line consistent-return
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token Invalid' });
    }
    req.payload = {id : decoded.id};
  });
  return next();
};

module.exports = {
  authRequired,
};
