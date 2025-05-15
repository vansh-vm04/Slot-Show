const express = require('express')
const router = express.Router()
const {createSeatLayout, getAllLayouts, assignLayout} = require('../controllers/seatLayoutController')

router.post('/admin/create/seat-layout',createSeatLayout);
router.get('/admin/view/seat-layout',getAllLayouts);
router.patch('/admin/theatre/:id/set-layout',assignLayout);

module.exports = router