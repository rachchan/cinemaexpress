const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bookings = new Schema(
    {
        movieTitle: { type: String, required: true },
        date: { type: String, required : true },
        time: { type: String, required : true },
        customerName: { type: String, required : true },
        numberOfSeats: { type: Number, required : true },
        children: { type: Number},
        adults: { type: Number},
        concessions: { type: Number},
    }
)

module.exports = mongoose.model('bookings', Bookings)