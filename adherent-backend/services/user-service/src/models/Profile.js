const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bio: DataTypes.STRING,
  phone: DataTypes.STRING,
  address: DataTypes.STRING
});

module.exports = Profile;
