const express = require('express')

const createBooking = require('../controllers/bookings-ctrl')

const router = express.Router()

router.post('/bookings', createBooking)

module.exports = router