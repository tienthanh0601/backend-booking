const Ticket = require('../models/Tickets')

const deleteTicket = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkTicket = await Ticket.findOne({
        _id: id
      })
      if (checkTicket === null) {
        resolve({
          status: 'ERR',
          message: 'The Ticket is not defined'
        })
      }
      await Ticket.findByIdAndDelete(id)
      resolve({
        status: 'OK',
        message: 'delete SUCCESS'
      })
    } catch (e) {
      reject(e)
    }
  })
}

const getAllTicket = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allTicket = await Ticket.find()
      resolve({
        status: 'OK',
        message: 'get all point',
        data: allTicket
      })
    } catch (e) {
      reject(e)
    }
  })
}

const getDetailsTicket = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const ticket = await Ticket.findOne({
        _id: id
      })
      if (ticket === null) {
        resolve({
          status: 'ERR',
          message: 'The point is not defined'
        })
      }
      resolve({
        status: 'OK',
        message: 'SUCESS',
        data: ticket
      })
    } catch (e) {
      reject(e)
    }
  })
}

const updateTicket = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkTicket = await Ticket.findOne({
        _id: id
      })
      if (checkTicket === null) {
        resolve({
          status: 'ERR',
          message: 'The point is not defined'
        })
      }
      const updatedTicket = await Ticket.findByIdAndUpdate(id, data, {
        new: true
      })
      resolve({
        status: 'OK',
        message: 'SUCCESS',
        data: updatedTicket
      })
    } catch (e) {
      reject(e)
    }
  })
}

const createTicket = (newTicket) => {
  return new Promise(async (resolve, reject) => {
    const { user, trip, isPaid } = newTicket
    try {
      const createdTicket = await Ticket.create({
        user,
        trip,
        isPaid
      })
      if (createdTicket) {
        resolve({
          status: 'OK',
          message: 'SUCCESS',
          data: createdTicket
        })
      }
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  createTicket,
  updateTicket,
  getDetailsTicket,
  getAllTicket,
  deleteTicket
}
