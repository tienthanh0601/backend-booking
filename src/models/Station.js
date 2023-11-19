const mongoose = require('mongoose')

const stationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  points: [
    {
      id: { type: mongoose.Types.ObjectId, required: true, ref: 'Point' },
      isTarget: { type: Boolean, required: true }
    }
  ]
})

const Station = mongoose.model('Station', stationSchema)

module.exports = Station
