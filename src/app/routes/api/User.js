const { Router } = require('express');

const UserController = require('../../controllers/userControllers');
const { authRequired } = require('../auth');
const {
  indexValidator, destroyValidator, showValidator, storeValidator, updateValidator,
} = require('../../controllers/validators/User');

const userController = new UserController();

const routes = Router();

routes.post('/create', storeValidator, userController.store);
routes.get('/', authRequired, indexValidator, userController.index);
routes.put('/:id', authRequired, updateValidator, userController.update);
routes.get('/:id', authRequired, showValidator, userController.show);
routes.delete('/:id', authRequired, destroyValidator, userController.destroy);

module.exports = routes;
