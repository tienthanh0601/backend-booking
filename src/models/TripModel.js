const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Station',
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Station',
    required: true
  },
  day: {
    type: Date,
    required: true
  },
  timeStart: {
    type: String,
    required: true
  },
  timeEnd: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  points: [
    {
      id: { type: mongoose.Types.ObjectId, required: true, ref: 'Point' },
      time: { type: String },
      isPick: { type: Boolean }
      // ispick neu true diem don , false diem tra
    }
  ]
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip
