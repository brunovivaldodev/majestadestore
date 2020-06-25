const { Router } = require('express');

const CategoriesController = require('../../controllers/categories');

const categoriesController = new CategoriesController();
const routes = Router();

routes.post('/create/:id', categoriesController.store);
module.exports = routes;
