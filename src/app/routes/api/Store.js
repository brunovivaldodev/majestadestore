const { Router } = require('express');
const { authRequired } = require('../auth');
const StoreController = require('../../controllers/store');
const UserController = require('../../controllers/user');

const storeController = new StoreController();
const { userAdmin } = new UserController();
const {
  storeValidator, destroyValidator, indexValidator, showValidator, updateValidator,
} = require('../../controllers/validators/Store');

const routes = Router();

routes.post('/create', authRequired, storeValidator, storeController.store);
routes.get('/', authRequired, indexValidator, storeController.index);
routes.put('/:id', authRequired, userAdmin, updateValidator, storeController.update);
routes.delete('/:id', authRequired, userAdmin, destroyValidator, storeController.destroy);
routes.get('/:id', authRequired, showValidator, storeController.show);

module.exports = routes;
