const express = require('express')
const router = express.Router()
const vehicleController = require('../controllers/vehicleController')
const {
  authMiddleWare,
  authUserMiddleWare
} = require('../middleware/authMiddlewave')

router.post('/create', vehicleController.createVehicle)
// router.put('/update/:id',authMiddleWare, tripController.updateTrip)
// router.get('/details/:id', tripController.getDetailsTrip)
// router.get('/all', tripController.getAllTrip)
// router.delete('/delete/:id', tripController.deleteTrip)

module.exports = router
