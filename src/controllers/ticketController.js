const TicketService = require('../services/TicketService')

const deleteTicket = async (req, res) => {
  try {
    const ticketId = req.params.id
    if (!ticketId) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The pointId is required'
      })
    }
    const response = await TicketService.deleteTicket(ticketId)
    return res.status(200).json(response)
  } catch (e) {
    console.log(e)
    return res.status(404).json({
      message: e
    })
  }
}

const getAllTicket = async (req, res) => {
  try {
    const response = await TicketService.getAllTicket()
    return res.status(200).json(response)
  } catch (e) {
    console.log(e)
    return res.status(404).json({
      message: e
    })
  }
}

const getDetailsTicket = async (req, res) => {
  try {
    const ticketId = req.params.id
    if (!ticketId) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The TicketId is required'
      })
    }
    const response = await TicketService.getDetailsTicket(ticketId)
    return res.status(200).json(response)
  } catch (e) {
    return res.status(404).json({
      message: e
    })
  }
}

const updateTicket = async (req, res) => {
  try {
    const ticketId = req.params.id
    const data = req.body
    if (!ticketId) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The TicketId is required'
      })
    }
    const response = await TicketService.updateTicket(ticketId, data)
    return res.status(200).json(response)
  } catch (e) {
    return res.status(404).json({
      message: e
    })
  }
}

const createTicket = async (req, res) => {
  const { user, trip, isPaid } = req.body
  try {
    const response = await TicketService.createTicket(req.body)
    return res.status(200).json(response)
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = {
  createTicket,
  updateTicket,
  getDetailsTicket,
  getAllTicket,
  deleteTicket
}
