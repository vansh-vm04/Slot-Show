const {pool} = require('../config/db')

const PaymentModel = {
    async createPayment(booking_id,user_id,payment_gateway,payment_id,amount,currency,status,method,paid_at){
        const query = "INSERT INTO Payment(booking_id,user_id,payment_gateway,payment_id,amount,currency,status,method,reciept_url,paid_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;";
        const values = [booking_id,user_id,payment_gateway,payment_id,amount,currency,status,method,paid_at];
        
        const result = await pool.query(query,values);
        return result.rows[0];
    }
}

module.exports = PaymentModel