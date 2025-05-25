const BookingModel = require('../models/BookingModel')

const newBooking = async(req,res)=>{
    try {
        const data = req.body;
        console.log(data)
        if(!data) return res.status(400).json({message:"Booking Data Not found"});
        const result = await BookingModel.createBooking(data.userid,data.movieid,data.eventid,data.theatreid,data.seat,data.price,data.status);
        res.status(200).json({message:"Booking Successful",details:result});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        console.log(error)
    }
}

const allBookings = async(req,res)=>{
    try {
        const data = await BookingModel.all();
        res.status(200).json({message:`${data.bookingCount} Bookings found`,bookings:data.bookings});
    } catch (error) {
        res.status(500).json({message:"Internal Server error"});
        console.log(error);
    }
}

const getBookingById = async(req,res)=>{
    try {
        const bookingId = req.params.id;
        const booking = await BookingModel.getBookingById(bookingId);
        if(!booking) res.status(400).json({message:"Booking not found"});
        res.status(200).json({message:"Booking found",booking:booking});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        console.log(error)
    }
}

const getBookingByUserId = async(req,res)=>{
    try {
        const userid = req.params.userid;
        const booking = await BookingModel.getBookingByUserId(userid);
        if(!booking) res.status(400).json({message:"Bookings not found"});
        res.status(200).json({message:"Bookings found",booking:booking});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        console.log(error)
    }
}

module.exports = {newBooking,allBookings,getBookingById,getBookingByUserId}