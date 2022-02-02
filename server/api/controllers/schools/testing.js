const testing = require('../../../mock/schools/testing')

module.exports = {
    getAll: (req, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.status(200).send(testing)
    }
}
