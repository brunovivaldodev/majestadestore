const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { generateToken } = require('../../helpers/token');

class UserController {
  async store(req, res) {
    try {
      const {
        name, email, password, permition,
      } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      let user = await User.findOne({ attributes: ['email'], where: { email } });
      if (!user) {
        user = await User.create({
          name, email, password: hash, permition,
        });
        user.password = undefined;
        const token = generateToken({ id: user.id });
        return res.status(200).json({ user, token });
      }

      return res.status(403).json({ error: 'User already registed' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        name, email, password, permition,
      } = req.body;
      const user = await User.findOne({ attributes: ['id'], where: { id } });
      if (!user) {
        return res.status(404).json({ message: 'User Not Found' });
      }
      if (name) { user.name = name; }
      if (email) { user.email = email; }
      if (password) user.password = password;
      if (permition) user.permition = permition;
      await user.save();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async index(req, res) {
    try {
      const user = await User.findAll({ attributes: ['name', 'email'] });
      if (!user) {
        return res.status(200).json({ message: 'No Users Found' });
      }
      return res.json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, { attributes: ['name', 'email', 'permition'] });
      if (user) {
        return res.json(user);
      }
      return res.status(404).json({ message: 'User Not Found' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({ attributes: ['id'], where: { id } });
      if (user) {
        await user.destroy();
        return res.status(404).json({ message: 'User Deleted' });
      }
      return res.status(404).json({ message: 'User Not Found' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async userAdmin(req, res, next) {
    try {
      const { id } = req.payload;
      let user = await User.findByPk(id, { attributes: ['id'] });
      if (!user) { return res.status(403).json({ error: 'Not Exists' }); }

      user = await User.findOne({ attributes: ['id', 'permition'], where: { id, permition: 'admin' } });
      if (!user) { return res.status(403).json({ error: 'User is not Admin' }); }
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = UserController;
