const UserRouter = require('./UserRouter')
const TripRouter = require('./TripRouter')
const StationRouter = require('./StationRouter')
const PointRouter = require('./PointRouter')
const VehicleRouter = require('./VehicleRouter')
const SeatRouter = require('./SeatRouter')
const TicketRouter = require('./TicketRouter')

const routes = (app) => {
  app.use('/api/user', UserRouter)
  app.use('/api/trip', TripRouter)
  app.use('/api/station', StationRouter)
  app.use('/api/point', PointRouter)
  app.use('/api/vehicle', VehicleRouter)
  app.use('/api/seat', SeatRouter)
  app.use('/api/ticket', TicketRouter)
}

module.exports = routes
