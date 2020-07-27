const { Router } = require('express');

const UserControllers = require('../../controllers/user');
const { authRequired } = require('../auth');
const ProductController = require('../../controllers/product');

const routes = Router();
const { userAdmin } = new UserControllers();
const productController = new ProductController();

routes.post('/create', authRequired, userAdmin, productController.store);
routes.get('/', productController.index);
routes.get('/:id', productController.show);
routes.put('/:id', authRequired, userAdmin, productController.update);
routes.delete('/:id', authRequired, userAdmin, productController.destroy);

module.exports = routes;
