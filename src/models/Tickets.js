const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip'
    },
    seatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seat'
    },
    isPaid: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket
