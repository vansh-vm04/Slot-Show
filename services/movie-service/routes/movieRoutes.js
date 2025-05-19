const express = require('express')
const router = express.Router();
const {movieDetails, createMovie, getAllMovies, assignTheatre} = require('../controllers/movieController')

router.post('/admin/createMovie',createMovie);
router.get('/movie/details/:id',movieDetails);
router.get('/movies',getAllMovies);
router.patch('/admin/movie/:id/set-theatre',assignTheatre);


module.exports = router;