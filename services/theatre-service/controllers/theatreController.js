const {Theatre} = require('../models/TheatreModel')

const createTheatre = async (req,res) =>{
    try {
        // await Theatre.sync({force:true});
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
const getAllTheatre = async(req,res)=>{
    try {
        const AllTheatre = await Theatre.findAll();
        if(!AllTheatre) res.status(404).json({message:"Theatres not found"});
        res.status(200).json({message:"Theatres found!",Theatres:AllTheatre});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        console.log(error)
    }
}

const getTheatre = async(req,res)=>{
    try {
        const id = await req.params.id;
        const theatre = await Theatre.findByPk(id);
        if(!theatre) res.status(404).json({message:"Theatre not found"});
        res.status(200).json({message:"Theatre found",theatre:theatre});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        console.log(error)
    }
}

module.exports = {createTheatre, getAllTheatre, getTheatre}