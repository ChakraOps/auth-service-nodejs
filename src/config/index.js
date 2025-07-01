require('./env'); // Ensure env vars loaded & validated

const config = {
  port: process.env.PORT || 5000,

  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiresIn: '15m',
    refreshExpiresIn: '7d',
  },

  db: {
    url: process.env.DATABASE_URL,
  },
};

module.exports = config;
