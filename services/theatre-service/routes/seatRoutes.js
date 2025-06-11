const express = require('express')
const router = express.Router()
const { lockSeats, unlockSeats, getSeatLockStatus } = require('../services/seatLockService')

router.get('/seats/lock-status',async (req,res)=>{
    const {showId,seatIds} = req.body;
    if(!showId) return res.status(400).json({message:"Show id not found"})
    try {
        const status = await getSeatLockStatus(showId,seatIds);
        res.status(200).json(status);
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        console.log(error);
    }
})

router.post('/seats/lock',async(req,res)=>{
    const {showId, seatIds, userId} = req.body;
    if(seatIds.length==0) res.status(400).json({message:"No seats to lock"});
    try {
        const locked = await lockSeats(showId,seatIds,userId);
        req.app.get("io").emit("seats-locked",{showId:showId, seatIds:locked, userId:userId});
        res.status(200).json({message:"lock success",locked:locked});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
        console.log(error)
    }
})

router.post('/seats/unlock',async(req,res)=>{
    const {showId, seatIds, userId} = req.body;
    try {
        const unlocked = await unlockSeats(showId,seatIds,userId);
        req.app.get("io").emit("seats-unlocked",{showId:showId, seatIds:unlocked, userId:userId});
        res.status(200).json({message:"Unlock success",unlocked:unlocked});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        console.log(error);
    }
})

module.exports = router;