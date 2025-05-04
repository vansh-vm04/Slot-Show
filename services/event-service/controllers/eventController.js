const Event = require('../models/EventModel')

const createEvent = async (req,res)=>{
    try {
        // await Event.sync({force:true});
        const event = req.body;
        const newEvent = await Event.create(event);
        res.status(200).json(newEvent);
    } catch (error) {
        console.log(error)
        res.status(500).json({"Internal Server Error":error})
    }
}

const eventDetails = async (req,res)=>{
    try {
        await Event.sync();
        const eventId = await req.params.id;
        const event = await Event.findByPk(eventId);
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({"Not Found":error});
    }
}

const getAllEvents = async (req,res)=>{
    try {
        await Event.sync();
        const events = await Event.findAll();
        res.status(200).json({"Events":events})
    } catch (error) {
        res.status(500).json({"Internal Server Error":error})
    }
}

module.exports = {createEvent, eventDetails,getAllEvents}