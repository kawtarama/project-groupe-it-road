// services/authService.js
const bcrypt = require("bcryptjs");
const jwtService = require("./jwtService");
const User = require("../models/User");

const register = async ({ name, email, password }) => {
  const existingUser = User.findByEmail(email);
  if (existingUser) throw new Error("Email déjà utilisé");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = User.create({ name, email, password: hashedPassword });
  return user;
};

const login = async ({ email, password }) => {
  const user = User.findByEmail(email);
  if (!user) throw new Error("Identifiants invalides");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Identifiants invalides");

  const token = jwtService.generateToken({ id: user.id, email: user.email });
  return { token, user };
};

module.exports = {
  register,
  login,
};
