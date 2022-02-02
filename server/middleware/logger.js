const chalk = require('chalk')
const logger = require('../util/logger')

const colorRestVerb = (requestMethod) => {
    switch (requestMethod) {
    case 'GET':
        return chalk.bgGreen(requestMethod)
    case 'POST':
        return chalk.bgYellow(requestMethod)
    case 'PATCH':
        return chalk.bgGrey(requestMethod)
    case 'DELETE':
        return chalk.bgRed(requestMethod)
    default:
        return chalk.hex('#00adee')(requestMethod)
    }
}

const loggerMiddleware = (req, res, next) => {
    const {
        body,
        url,
        query,
        method,
        params
    } = req

    logger.log(colorRestVerb(method), url, body ? { body } : '')
    console.log('    ', { params, query, body })
    next()
}

module.exports = (server) => {
    server.use(loggerMiddleware)
}
