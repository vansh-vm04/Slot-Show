const {Movie} = require('../models/MovieModel')
const {configDotenv} = require('dotenv')
configDotenv();

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

const assignTheatre = async (req,res)=>{
    try {
        const movieId = await req.params.id;
        const {theatreId} = await req.body;
        console.log(theatreId)
        if(!movieId) res.status(404).json({message:"Movie id required"})
        const movie = await Movie.findByPk(movieId);
        if(!movie) res.status(404).json({message:"Movie not exist"})
        const response = await fetch(`${process.env.THEATRE_SERVICE_URL}/api/view/theatre/${theatreId}`,
            {method:'GET'}
        );
        if(!response.ok) res.status(404).json({message:"Theatre does not exists"});
        const {theatre} =  await response.json();
        console.log(theatre);
        movie.theatre = theatre.id;
        await movie.save();
        res.status(200).json({message:"Assigned successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log(error)
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

module.exports = {createMovie, movieDetails,getAllMovies, assignTheatre}