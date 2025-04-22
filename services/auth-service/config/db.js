const { Sequelize } = require('sequelize');

require('dotenv').config();


const DB_USER = process.env.DB_USER || 'auth_user';
const DB_PASSWORD = process.env.DB_PASSWORD || 'auth_pass';
const DB_NAME = process.env.DB_NAME || 'auth_db';
const DB_HOST = process.env.DB_HOST || 'localhost';  


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
