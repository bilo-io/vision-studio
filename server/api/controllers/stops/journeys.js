const journeys = require('../../../mock/stops/journeys')

module.exports = {
    createJourney: (req, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.status(201).send(journeys)
    },
    getById: (req, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.status(200).send(journeys)
    }
}
