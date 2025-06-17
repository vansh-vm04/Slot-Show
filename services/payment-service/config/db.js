const {Pool} = require('pg')
const { configDotenv } = require('dotenv');
configDotenv();

const pool = new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME
})

const checkConnection = async ()=>{
    try {
        const response = await pool.query("SELECT NOW()");
        if(response) console.log(response.rows[0].now);
    } catch (error) {
        console.log( "ERROR: " +error)
    }
}

checkConnection();

module.exports = {pool,checkConnection};