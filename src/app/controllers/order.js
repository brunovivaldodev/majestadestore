const Order = require('../models/Order');
const Client = require('../models/Client');
const Product = require('../models/Product');

class OrderController {
  async store(req, res) {
    try {
      const { cancel } = req.body;
      const { client_id, product_id } = req.params;
      const client = await Client.findByPk(client_id);
      if (!client) {
        return res.status(404).json({ error: 'Client Not Found' });
      }
      const product = await Product.findByPk(product_id);
      if (!product) {
        return res.status(404).json({ error: 'Product Not Found' });
      }
      const order = await Order.create({ cancel, client_id });
      await order.addProducts([product]);
      return res.status(200).json(order);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  }
}

module.exports = OrderController;
