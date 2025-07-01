require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const { requireAuth } = require('./middlewares/authMiddleware');

app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'SecureAuth API Running' }));
app.use('/auth', authRoutes);

// Example protected route
app.get('/profile', requireAuth, (req, res) => {
  res.json({ message: 'Secure Profile Data', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
