const {Movie} = require('../models/MovieModel')

const createMovie = async (req,res,done)=>{
    try {
        await Movie.sync();
        const movie = req.body;
        const newMovie = await Movie.create(movie);
        res.status(200).json(newMovie);
    } catch (error) {
        console.log(error)
        res.status(500).json({"Internal Server Error":error})
    }
}

module.exports = {createMovie}