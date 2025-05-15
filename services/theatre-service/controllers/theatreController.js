const {Theatre} = require('../models/TheatreModel')

const createTheatre = async (req,res) =>{
    try {
        // await Theatre.sync();
        const theatreData = await req.body;
        if(!theatreData.name || !theatreData.location) res.status(400).json({message:"Theatre name and location required"});
        const newTheatre = await Theatre.create(theatreData);
        if(!newTheatre) res.status(406).json({message:"Theatre details not acceptable"});
        res.status(201).json({message:"Theatre saved successfully",TheatreId:newTheatre.id});
    } catch (error) {
        console.log("Error in createTheatre: "+error)
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = {createTheatre}