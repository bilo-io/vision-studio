/* eslint-disable no-unused-vars */
// http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id={APP_ID}&app_key={APP_KEY}
import axios from 'axios'
import { utc } from 'moment'

const appId = '21372c95'
const appKey = '1a8c67d2650891c5cb6b6efbf3519a83'
const appUrl = 'http://api.weatherunlocked.com/api'

const fontAwesomeWeatherIcons = [
  'cloud',
  'cloud-sun-rain',
  'cloud-sun',
  'cloud-rain',
  'sun',
  'cloud-showers-heavy',
  'wind',
  'snowflake'
]

export const getCurrentWeather = ({ latitude, longitude }) => {
  console.log(`getCurrentWeather(${{ latitude, longitude }})`)

  const url = `${appUrl}/current/${latitude},${longitude}?app_id=${appId}&app_key=${appKey}`
  const promise = axios({
    method: 'GET',
    url
  })

  return promise
}

export const getWeatherForecast = ({ latitude, longitude }) => {
  console.log(`getWeatherForecast(${{ latitude, longitude }})`)

  const url = `${appUrl}/forecast/${latitude},${longitude}?app_id=${appId}&app_key=${appKey}`
  const promise = axios({
    method: 'GET',
    url
  })

  return promise
}

export const isDaytime = () => {
  const now = new Date()
  const hours = now.getHours()
  return hours >= 6 && hours <= 18
}
