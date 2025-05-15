const {SeatLayout} = require('../models/SeatLayoutModel')
const {Theatre} = require('../models/TheatreModel')

const createSeatLayout = async (req,res)=>{
    try {
        // await SeatLayout.sync({force:true});
        const seatLayout = await req.body;
        const response = await SeatLayout.create(
            {
                layout:seatLayout.layout
            }
        );
        if(response){
            res.status(201).json({message:"Layout Saved",Layout_ID:response.id});
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        console.log(error)
    }
}

const getAllLayouts = async (req,res) =>{
    try {
        const layouts = await SeatLayout.findAll();
        if(layouts){
            res.status(200).json({message:"Layouts found!",Layouts:layouts});
        }
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
        console.log(error)
    }
}

const assignLayout = async (req,res) =>{
    try {
        const theatre_Id = await req.params.id;
        const layout_Id = await req.body.seatLayoutId;

        const theatre = await Theatre.findByPk(theatre_Id);
        if(!theatre) res.status(404).json({message:"Theatre not found"});
        const layout = await SeatLayout.findByPk(layout_Id)
        if(!layout) res.status(404).json({message:"Layout not found"});

        theatre.seatLayoutId = layout_Id;
        await theatre.save();
        res.status(200).json({message:"Layout assigned successfully!!"})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log(error)
    }
}

module.exports = {createSeatLayout,getAllLayouts,assignLayout}