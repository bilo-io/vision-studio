const os = require('os')
const pkg = require('../../package.json')

const env = process.env
const pid = process.pid
const port = env.port || 8005
const skipCodeSigning = true

// TODO: NB => NGINX
const identityApiPort = 3000
const slidesApiPort = 3010
const schoolsApiPort = 3020

// Electron
if (skipCodeSigning) {
  process.env.CSC_IDENTITY_AUTO_DISCOVERY = false
}

const envUrl = {
  development: `http://localhost:${port}`,
  sandbox: 'http://vis-ion.gitlab.io/studio',
  production: 'https://studio.vis-ion.io'
}

const apiUrl = {
  development: {
    identity: `http://localhost:${identityApiPort}/api`,
    slides: `http://localhost:${slidesApiPort}/api`,
    schools: `http://localhost:${schoolsApiPort}/api`
  },
  sandbox: {
    identity: 'http://locahost:8005/api/identity',
    slides: 'http://locahost:8005/api/slides',
    schools: 'http://localhost:8005/api/schools'
  }
}

const visionEnv = {
  appName: pkg.name,
  version: pkg.version,
  appUrl: envUrl[env.NODE_ENV],
  apiUrl: apiUrl[env.NODE_ENV],
  environment: env.NODE_ENV,
  port,
  pid,
  platform: os.platform()
}

console.log(visionEnv)

// module.exports = visionEnv
export default visionEnv
