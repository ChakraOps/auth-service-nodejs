const prisma = require('../config/prisma');
const { hashPassword, verifyPassword } = require('../utils/hash');
const {
  generateAccessToken,
  generateRefreshToken,
} = require('../utils/jwt');

const register = async (email, password) => {
  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: { email, password: hashed },
  });

  return { id: user.id, email: user.email };
};

const login = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) throw new Error('Invalid credentials');

  const valid = await verifyPassword(password, user.password);
  if (!valid) throw new Error('Invalid credentials');

  const accessToken = generateAccessToken({ id: user.id });
  const refreshToken = generateRefreshToken({ id: user.id });

  return {
    accessToken,
    refreshToken,
    user: { id: user.id, email: user.email },
  };
};

module.exports = { register, login };
