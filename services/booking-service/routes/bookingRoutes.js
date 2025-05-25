const express = require('express');
const { newBooking, allBookings, getBookingById, getBookingByUserId } = require('../controllers/bookingController');
const router = express.Router();

router.post('/user/bookings',newBooking);
router.get('/admin/bookings',allBookings);
router.get('/user/booking/:id',getBookingById);
router.get('/booking/user/:userid',getBookingByUserId);

module.exports = router