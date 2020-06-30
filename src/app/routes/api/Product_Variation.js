const { Router } = require('express');

const UserControllers = require('../../controllers/user');
const { authRequired } = require('../auth');
const ProductVariationController = require('../../controllers/Product_variation');

const routes = Router();
const { userAdmin } = new UserControllers();
const productVariationController = new ProductVariationController();

routes.post('/:product_id', authRequired, userAdmin, productVariationController.store);
// routes.get('/', productController.index);
// routes.get('/:id', productController.show);
// routes.put('/:id', authRequired, userAdmin, productController.update);
// routes.delete('/:id', authRequired, userAdmin, productController.destroy);

module.exports = routes;
