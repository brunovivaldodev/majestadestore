const Store = require('../models/Store');

class StoreController {
  async store(req, res) {
    try {
      const {
        name, email, telephone, address,
      } = req.body;
      let store = await Store.findOne({ attributes: ['email'], where: { email } });
      if (!store) {
        store = await Store.create({
          name, email, telephone, address,
        });
        return res.status(200).json(store);
      }
      return res.status(403).json({
        message: 'Store is already registed',
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        name, email, telephone, address,
      } = req.body;
      const store = await Store.findOne({ attributes: ['id'], where: { id } });
      if (!store) {
        return res.status(404).json({ message: 'Store Not Found' });
      }
      if (name) { store.name = name; }
      if (email) { store.email = email; }
      if (telephone) store.telephone = telephone;
      if (address) store.address = address;
      await store.save();
      return res.status(200).json(store);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async index(req, res) {
    try {
      const store = await Store.findAll({ attributes: ['email', 'telephone', 'address'] });
      return res.status(200).json(store);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const store = await Store.findByPk(id, { attributes: ['email', 'telephone', 'address'] });
      if (!store) {
        return res.status(404).json({ error: 'No Store Found' });
      }
      return res.status(200).json(store);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const store = await Store.findByPk(id);
      if (!store) {
        return res.status(404).json({ error: 'Store No Found' });
      }
      await store.destroy();
      return res.status(200).json({ message: 'Store deleted' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = StoreController;
