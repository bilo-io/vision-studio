const security = (req, res, next) => {
    console.warn('WARNING: No security middleware set up')
    next()
}

module.exports = (server) => {
    server.use(security)
}

