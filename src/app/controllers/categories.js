const Categories = require('../models/Categories');
const Product = require('../models/Product');

class CategoriesController {
  async store(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(403).json({ error: 'Product not exists' });
      }
      const [categories] = await Categories.findOrCreate({ attributes: ['id', 'name'], where: { name } });

      await product.addCategories(categories);
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = CategoriesController;
