const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const db = require('./server/db/mongoose')
const bookingsRouter = require('./server/routes/bookings-router')
const app = express()
const apiPort = 5000
// *** config file *** //
const config = require('./server/_config');

// *** mongoose *** ///
mongoose.connect(config.mongoURI[app.settings.env], function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/cinema', bookingsRouter)
const server = app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

module.exports = server;