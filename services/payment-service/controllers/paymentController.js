const razorpay = require('../utils/razorpayInstance')

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

}

