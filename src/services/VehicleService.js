const Vehicle = require('../models/Vehicle')

const createVehicle = (newVehicle) => {
  return new Promise(async (resolve, reject) => {
    const { name, type, floor, totalSeat } = newVehicle
    try {
      const createdVehicle = await Vehicle.create({
        name,
        type,
        floor,
        totalSeat
      })
      if (createdVehicle) {
        resolve({
          status: 'OK',
          message: 'SUCCESS',
          data: createdVehicle
        })
      }
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  createVehicle
}
