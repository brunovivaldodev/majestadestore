const { Router } = require('express');
const { authRequired } = require('../auth');
const StoreController = require('../../controllers/storeController');

const storeController = new StoreController();
const {
  storeValidator, destroyValidator, indexValidator, showValidator, updateValidator,
} = require('../../controllers/validators/Store');

const routes = Router();

routes.post('/create', authRequired, storeValidator, storeController.store);
routes.get('/', authRequired, indexValidator, storeController.index);
routes.put('/:id', authRequired, updateValidator, storeController.update);
routes.delete('/:id', authRequired, destroyValidator, storeController.destroy);
routes.get('/:id', authRequired, showValidator, storeController.show);

module.exports = routes;
