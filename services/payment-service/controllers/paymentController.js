const razorpay = require('../utils/razorpayInstance')
const crypto = require('crypto')
const PaymentModel = require('../models/PaymentModel')

exports.createOrder = async(req,res)=>{
    const {bookingId, amount} = req.body;
    if(!bookingId || !amount) return res.status(400).json({message:"Amount and booking id are required"});
    try {
        const options = {
            amount:amount*100,
            currency:"INR",
            receipt: `rcpt_${bookingId}`
        }
        const order = await razorpay.orders.create(options);
        res.status(200).json({
            success:true,
            order_id:order.id,
            amount:order.amount,
            currency:order.currency,
            key:process.env.RAZORPAY_KEY_ID,
        })
    } catch (error) {
        res.status(500).json({success:false,Error:"order failed"})
        console.log(error)
    }
}

exports.verifyPayment = async(req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature, booking_id, user_id} = req.body;
    if(!razorpay_order_id || !razorpay_payment_id || !razorpay_signature){
        return res.status(400).json({message:"Payment failed"})
    }
    try {
        const body = razorpay_order_id + '|' + razorpay_payment_id
        const generated_sign = crypto.createHmac('sha256',process.env.RAZORPAY_KEY_SECRET).update(body).digest('hex');
        if(razorpay_signature !== generated_sign){
            return res.status(400).json({message:"Payment failed",success:false})
        }
        const payment_details = await razorpay.payments.fetch(razorpay_payment_id);
        const {
            amount,
            currency,
            status,
            method,
            created_at
        } = payment_details;
        const paid_at = new Date(created_at*1000);
        const payment = await PaymentModel.createPayment(booking_id,user_id,'razorpay',razorpay_payment_id,amount,currency,status,method,paid_at);
        res.status(200).json({message:"Payment success",success:true,payment:payment});
    } catch (error) {
        res.status(500).json({message:"Payment failed"});
        console.log(error)
    }
}
