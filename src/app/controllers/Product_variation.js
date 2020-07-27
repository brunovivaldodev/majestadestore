const productVariation = require('../models/Product_Variation');

class ProductVariationController {
  async store(req, res) {
    try {
      const {
        title, disponibility, describe, quantity, price,
      } = req.body;
      const { product_id } = req.params;
      const product = await productVariation.create({
        title, describe, disponibility, quantity, price, product_id,
      });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = ProductVariationController;
