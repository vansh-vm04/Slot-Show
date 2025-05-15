const express = require('express');
const { createTheatre } = require('../controllers/theatreController');
const router = express.Router();

router.post('/admin/create/theatre',createTheatre);


module.exports = router