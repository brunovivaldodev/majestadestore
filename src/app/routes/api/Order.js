const { Router } = require('express');

const OrderController = require('../../controllers/order');

// const { authRequired } = require('../auth');

const orderController = new OrderController();

const routes = Router();

routes.post('/:client_id/:product_id', orderController.store);
// routes.get('/', authRequired, orderController.index);
// routes.put('/', authRequired, orderController.update);
// routes.get('/:id', authRequired, orderController.show);
// routes.delete('/:id', authRequired, orderController.destroy);

module.exports = routes;
