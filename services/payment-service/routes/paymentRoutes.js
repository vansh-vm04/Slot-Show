const express = require('express');
const {createOrder, verifyPayment} = require('../controllers/paymentController');
const router = express.Router();

router.post('/payment/create-order',createOrder);
router.post('payment/verify',verifyPayment);

module.exports = router;