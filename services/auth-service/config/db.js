const { configDotenv } = require('dotenv');
const { Sequelize } = require('sequelize');
configDotenv();

const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASSWORD; 

const sequelize = new Sequelize(db_name,db_user,db_pass,{
  host:'localhost',
  dialect:'postgres',
  port:5432
});

async function checkConnection(){
  try {
    await sequelize.authenticate();
    console.log("database connected");
  } catch (error) {
    console.log("Error occured: " + error);
  }
}

checkConnection();

module.exports = sequelize;