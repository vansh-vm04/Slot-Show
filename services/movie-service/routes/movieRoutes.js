const express = require('express')
const router = express.Router();
const {movieDetails, createMovie, getAllMovies} = require('../controllers/movieController')

router.post('/admin/createMovie',createMovie);
router.get('/movie/details/:id',movieDetails);
router.get('/movies',getAllMovies);


module.exports = router;