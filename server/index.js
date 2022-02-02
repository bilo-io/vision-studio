// https://github.com/azat-co/cheatsheets/tree/master/express4
const withCluster = process.argv.includes(['withCluster'])
const cluster = require('cluster')
const os = require('os')
const dist = 'dist'
const useClusters = cluster.isMaster && withCluster

if (useClusters) {
    // Master
    const cpuCount = os.cpus().length
    console.log(`VISION-STUDIO: Forking ${cpuCount} CPU's`)
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork()
    }
} else {
    // Worker
    const express = require('express')
    const pkg = require('../package.json')
    const app = express()
    // const env = require('./util/env')
    const env = { port: 8005 }

    const middleware = require('./middleware')
    const apiRouter = require('./api/router')

    // #region API
    app.get('/api', (req, res) => {
        const { name, version } = pkg
        res.send({
            name,
            version
        })
    })
    // #endregion

    // #region APP
    app.use(express.static(dist))
    // #endregion

    app.listen(env.port, () => {
        console.log(`
===============================================
    VISION-STUDIO: app.js
    - withClusters: ${withCluster}
===============================================
🚀  webapp: http://localhost:${env.port}/app
-----------------------------------------------
🌐  server: http://localhost:${env.port}/api
===============================================
        `, true)
    })
}
