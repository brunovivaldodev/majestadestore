const { Router } = require('express');

const ClientController = require('../../controllers/client');
const UserController = require('../../controllers/user');
const { authRequired } = require('../auth');

const clientController = new ClientController();
const { userAdmin } = new UserController();

const routes = Router();

routes.post('/create', authRequired, clientController.store);
routes.get('/', authRequired, userAdmin, clientController.index);
routes.put('/', authRequired, clientController.update);
routes.get('/:id', authRequired, clientController.show);
routes.delete('/:id', authRequired, clientController.destroy);

module.exports = routes;
