const journeys = require('../controllers/stops/journeys')

module.exports = (app) => {
    app.post('/api/stops/journeys', journeys.createJourney)
    app.get('/api/stops/journeys/:id', journeys.getById)
}
