const express = require('express');
const { createTheatre,getAllTheatre,getTheatre } = require('../controllers/theatreController');
const router = express.Router();

router.post('/admin/create/theatre',createTheatre);
router.get('/admin/view/all-theatre',getAllTheatre);
router.get('/view/theatre/:id',getTheatre);


module.exports = router