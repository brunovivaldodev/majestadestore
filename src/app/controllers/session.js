const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { generateToken } = require('../../helpers/token');

class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ attributes: ['id', 'email', 'password'], where: { email } });
      if (!user) {
        return res.status(403).json({ error: 'User Not Found' });
      }
      if (await (bcrypt.compare(password, user.password))) {
        user.password = undefined;
        const token = generateToken({ id: user.id });
        return res.status(200).json({ user, token });
      }
      return res.status(403).json({ error: 'Invalid Password' });
    } catch (error) {
      return res.status(403).json(error);
    }
  }
}

module.exports = SessionController;
