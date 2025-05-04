const {Movie} = require('../models/MovieModel')

const createMovie = async (req,res)=>{
    try {
        // await Movie.sync({force:true});
        const movie = req.body;
        const newMovie = await Movie.create(movie);
        res.status(200).json(newMovie);
    } catch (error) {
        console.log(error)
        res.status(500).json({"Internal Server Error":error})
    }
}

const movieDetails = async (req,res)=>{
    try {
        await Movie.sync();
        const movieId = await req.params.id;
        const movie = await Movie.findByPk(movieId);
        res.status(200).json(movie);
    } catch (error) {
        res.status(404).json({"Not Found":error});
    }
}

const getAllMovies = async (req,res)=>{
    try {
        await Movie.sync();
        const movies = await Movie.findAll();
        res.status(200).json({"Movies":movies})
    } catch (error) {
        res.status(500).json({"Internal Server Error":error})
    }
}

module.exports = {createMovie, movieDetails,getAllMovies}