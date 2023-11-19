const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
})

const Point = mongoose.model('Point', pointSchema)

module.exports = Point
