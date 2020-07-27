const Product = require('../models/Product');

class ProductController {
  async store(req, res) {
    try {
      const {
        title, disponibility, describe, quantity, price,
      } = req.body;

      const product = await Product.create({
        title, describe, disponibility, quantity, price,
      });

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const {
        title, disponibility, describe, quantity,
      } = req.body;
      const { id } = req.params;
      const product = await Product.findOne({ attributes: ['id', 'title', 'disponibility', 'describe', 'quantity'], where: { id } });
      if (!product) {
        return res.status(404).json({ error: 'Not Product Found' });
      }
      if (title) { product.title = title; }
      if (disponibility) { product.disponibility = disponibility; }
      if (describe) { product.describe = describe; }
      if (quantity) { product.quantity = quantity; }

      await product.save();
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async index(req, res) {
    try {
      const product = await Product.findAll({ attributes: ['id', 'title', 'disponibility', 'describe', 'quantity'] });

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ where: { id }, attributes: ['title', 'id', 'disponibility', 'describe', 'quantity'] });
      if (!product) {
        return res.status(404).json({ error: 'Product Not Found' });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const product = await Product.findOne({ attributes: ['id'], where: { id } });

      if (!product) {
        return res.status(404).json({ error: 'Product Not Found' });
      }

      product.destroy();

      return res.status(200).json({ message: 'Product Deleted' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = ProductController;
