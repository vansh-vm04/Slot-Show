const express = require('express')
const router = express.Router();
const {createEvent, eventDetails,getAllEvents} = require('../controllers/eventController')

router.post('/admin/createEvent',createEvent);
router.get('/event/details/:id',eventDetails);
router.get('/events',getAllEvents);


module.exports = router;