const Order = require('../models/Order');
const Client = require('../models/Client');

class OrderController {
  async store(req, res) {
    try {
      const { cancel } = req.body;
      const { client_id } = req.params;
      console.log(client_id);
      const client = await Client.findByPk(client_id);
      if (!client) {
        return res.status(404).json({ error: 'Client Not Found' });
      }
      const order = await Order.create({ cancel, client_id });
      return res.status(200).json(order);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  }
}

module.exports = OrderController;
