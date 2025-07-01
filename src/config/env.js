const dotenv = require('dotenv');
dotenv.config();

const requiredVars = [
  'JWT_ACCESS_SECRET',
  'JWT_REFRESH_SECRET',
  'DATABASE_URL',
  'ENABLE_2FA',
  'ENABLE_MAGIC_LINK',
  'ENABLE_AUDIT_LOGS',
];

requiredVars.forEach((key) => {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});
