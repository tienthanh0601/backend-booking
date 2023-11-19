const mongoose = require('mongoose')

const seatSchema = new mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  floor: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  isBooked: {
    type: Boolean,
    default: false
  }
})

const Seat = mongoose.model('Seat', seatSchema)

module.exports = Seat
