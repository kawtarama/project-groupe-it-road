// src/models/User.js
const users = [];

module.exports = {
  findByEmail: (email) => users.find((u) => u.email === email),
  create: (user) => {
    const newUser = { id: users.length + 1, ...user };
    users.push(newUser);
    return newUser;
  },
  getAll: () => users,
};
