const devMiddleware = require('./dev')
const loggerMiddleware = require('./logger')
const securityMiddleware = require('./security')
const restMiddleware = require('./rest')

module.exports = (server) => {
    restMiddleware(server)
    devMiddleware(server)
    loggerMiddleware(server)
    securityMiddleware(server)
}
