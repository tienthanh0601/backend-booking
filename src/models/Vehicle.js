const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  floor: {
    type: Number,
    required: true
  },
  totalSeat: {
    type: Number,
    required: true
  }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle
