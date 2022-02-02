const schoolsRoutes = require('./routes/schools')
const stopsRoutes = require('./routes/stops')

module.exports = (app) => {
    schoolsRoutes(app)
    stopsRoutes(app)
    // VISION: API.ROUTERS
}
