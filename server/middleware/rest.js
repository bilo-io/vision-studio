const bodyParser = require('body-parser')

module.exports = (server) => {
    // "Content-Type": "application/x-www-form-urlencoded"
    server.use(bodyParser.urlencoded({ extended: true }))
    // "Content-Type": "application/json"
    server.use(bodyParser.json())
}