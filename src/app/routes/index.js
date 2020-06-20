const { Router } = require('express');
const { errors } = require('celebrate');
const sessionRoutes = require('./api/Session');
const userRoutes = require('./api/User');
const storeRoutes = require('./api/Store');

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/session', sessionRoutes);
routes.use('/store', storeRoutes);

routes.use(errors());

module.exports = routes;
