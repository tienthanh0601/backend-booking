const VehicleService = require('../services/VehicleService')

const createVehicle = async (req, res) => {
  const { name, address, point } = req.body
  try {
    const response = await VehicleService.createVehicle(req.body)
    return res.status(200).json(response)
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = {
    createVehicle
}
