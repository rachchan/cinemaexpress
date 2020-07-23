const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bookings = new Schema(
    {
        movieTitle: { type: String, required: true },
        date: { type: Date, required : true },
        time: { type: Date, required : true },
        customerName: { type: String, required : true },
        numberOfSeats: { type: Number, required : true },
        children: { type: Number, required : true },
        adults: { type: Number, required : true },
        concessions: { type: Number, required : true },
    }
)

module.exports = mongoose.model('bookings', Bookings)