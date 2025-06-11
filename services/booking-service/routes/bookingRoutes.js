const express = require('express');
const { newBooking, allBookings, getBookingById, getBookingByUserId } = require('../controllers/bookingController');
const router = express.Router();

router.post('/user/new-booking',newBooking);
router.get('/admin/all-bookings',allBookings);
router.get('/user/booking/:id',getBookingById);
router.get('/user/all-bookings/:userid',getBookingByUserId);

module.exports = router