process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const server = require('./index');
const booking = require('./server/models/bookings');
const { expect } = require('chai');
const should = chai.should();
chai.use(chaiHttp);

describe('booking', function() {
    // booking.collection.drop();

    beforeEach(function(done) {
        const newBooking = new booking({
            movieTitle: 'Batman', 
            date: '2020-07-29', 
            time: '18:00', 
            customerName: 'Bob',
            numberOfSeats: 1,
            children: 0,
            adults: 1,
            concessions: 0
        });
        newBooking.save(function(err) {
            done();
        });
    });
    afterEach(function(){
        return booking.collection.drop();
    });

    it('should add a SINGLE booking on /bookings POST', function(done) {
        chai.request(server)
        .post('/cinema/bookings')
        .send({ 
        'movieTitle': 'Batman', 
        'date': '2020-07-29', 
        'time': '18:00', 
        'customerName': 'Bob',
        'numberOfSeats': 1,
        'children': 0,
        'adults': 1,
        'concessions': 0
        })  
        .end(function(err, res){
            console.log(err);
            console.log(res.body)
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('success');
            res.body.success.should.be.a('boolean');
            done();
        })
    })
 });
//  const body = res.body;
//  expect(body).to.contain.property('movieTitle');
//  expect(body).to.contain.property('date');
//  expect(body).to.contain.property('time');
//  expect(body).to.contain.property('customerName');
//  expect(body).to.contain.property('numberOfSeats');
//  expect(body).to.contain.property('children');
//  expect(body).to.contain.property('adults');
//  expect(body).to.contain.property('concessions');