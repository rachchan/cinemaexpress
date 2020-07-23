const Bookings = require('../models/bookings')


createBooking = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false.body,
            error: 'You must provide booking details',
        })
    }

    const bookings = new Bookings(body)

    if (!bookings) {
        return res.status(400).json({success: false, error: err})
    }

    bookings
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: bookings._id,
                message: 'Booking created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Booking not created!',
            })
        })
}

module.exports = createBooking