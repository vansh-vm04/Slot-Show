const express = require('express');
const { newBooking, allBookings } = require('../controllers/bookingController');
const router = express.Router();

router.post('/user/bookings',newBooking);
router.get('/admin/bookings',allBookings);

module.exports = router