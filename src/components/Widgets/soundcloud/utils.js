import axios from 'axios'
// const process = require('child_process')
// const env = process.env

const CLIENT_ID = '45ca7c7c9b41fdcb2501bb7dd27e168b' // env.SOUNDCLOUD_CLIENT_ID

console.log('Soundcloud CLIENT ID: ', CLIENT_ID)

export default async (url) => {
  try {
    const trackResponse = await axios.get(`https://api.soundcloud.com/resolve.json?url=${encodeURIComponent(url)}&client_id=${CLIENT_ID}`)
    console.log({ trackResponse })
    return trackResponse.data.uri.split('/').pop()
  } catch (error) {
    return error
  }
}
