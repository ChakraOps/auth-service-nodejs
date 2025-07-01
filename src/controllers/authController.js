const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email & Password required' });

    const user = await authService.register(email, password);
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email & Password required' });

    const tokens = await authService.login(email, password);
    res.json(tokens);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { register, login };
