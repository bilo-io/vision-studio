const delayMiddleware = function (req, res, next) {
    setTimeout(next, 1000)
}

module.exports = (server) => {
    server.use(delayMiddleware)
}
