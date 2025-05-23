const {pool} = require('../config/db')

const BookingModel = {
    async createBooking(userid,movieid,eventid,theatreid,seat,price,status){
        let query,values;
        if(movieid){
            query = "INSERT INTO Booking(userid,theatreid,movieid,price,seat,status) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;";
            values = [userid,theatreid,movieid,price,seat,status];
        }else if(eventid){
            query = "INSERT INTO Booking(userid,theatreid,eventid,price,seat,status) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;";
            values = [userid,theatreid,eventid,price,seat,status];
        }else {
            throw new Error("Either movieId or eventId must be provided.");
        }
        const result = await pool.query(query,values);
        return result.rows[0];
    },

    async all() {
    const result = await pool.query('SELECT * FROM Booking;');
    console.log(result)
    const data = {
        bookingCount:result.rowCount,
        bookings:result.rows
    }
    console.log(data)
    return data;
  },
}

module.exports = BookingModel;