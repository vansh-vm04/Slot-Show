const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING, // 'google', 'github', etc.
      allowNull: false,
    },
    providerId: {
      type: DataTypes.STRING, // user ID from Google/GitHub
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
  
  module.exports = User;