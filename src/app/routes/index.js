const { Router } = require('express');
const { errors } = require('celebrate');

const sessionRoutes = require('./api/Session');
const userRoutes = require('./api/User');
const storeRoutes = require('./api/Store');
const clientRoutes = require('./api/Client');
const productRoutes = require('./api/Product');
const catregoriesRoutes = require('./api/Categories');
const productVariationRoutes = require('./api/Product_Variation');

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/session', sessionRoutes);
routes.use('/store', storeRoutes);
routes.use('/client', clientRoutes);
routes.use('/product', productRoutes);
routes.use('/categories', catregoriesRoutes);
routes.use('/variations', productVariationRoutes);

routes.use(errors());

module.exports = routes;
