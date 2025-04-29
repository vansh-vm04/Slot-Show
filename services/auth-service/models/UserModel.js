const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const User = sequelize.define(
  'User',
  {
    id:{
      type: DataTypes.STRING,
      allowNull:true,
      primaryKey:true
    },
    name:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    avatar:{
      type : DataTypes.STRING,
      allowNull:true
    }
  },
  { freezeTableName: true }
);
console.log(User === sequelize.models.User)
module.exports = {User}
