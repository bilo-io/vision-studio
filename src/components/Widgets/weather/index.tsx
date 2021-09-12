import React, { useEffect, useState } from 'react'

import {
  getCurrentWeather,
  getWeatherForecast,
  isDaytime
} from './util'

import {
  currentWeather
//   forecast
} from './data'

import {
  getDayOffset
} from 'utils/date'

// console.log(getDayOffset(1))

export const WidgetWeather = ({ data, isEditable, onNext, duration, format }: any) => {
  const [state, setState] = useState<any>({
    weather: currentWeather
    // forecast: forecast
  })

  useEffect(() => {
    setTimeout(onNext, duration * 1000)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { coords } = position
        console.log(coords.latitude, coords.longitude)

        getCurrentWeather(coords)
          .then(response => {
            console.log('weather: ', response.data)
            setState({
              weather: response.data
            })
          })

        getWeatherForecast(coords)
          .then(response => {
            // console.log('forecast: ', JSON.stringify(response.data, false, 4))
            setState({
              forecast: response.data
            })
          })
      })
    }
  }, [])

  const { weather, forecast } = state

  const DataLine = ({ label, value, format, symbol }: any) => <div className='flex-row space-between'>
    <div>{label}:</div>
    <div style={{ fontWeight: 'bold' }}>{ value }{symbol}</div>
  </div>

  return <div className={`weather-container ${isDaytime() ? 'day' : 'night'}`}>
    <div className='summary'>
      <span className='temperature'>{weather.temp_c} º { format === 'celcius' ? 'C' : 'F'}</span>
      <DataLine
        label='Humidity'
        value={ weather.humid_pct }
        symbol={'%'}
      />
      <DataLine
        label='Altitude'
        value={ weather.alt_m }
        symbol={ 'm' }
      />
      <DataLine
        label='Cloudy'
        value={ weather.cloudtotal_pct }
        symbol='%'
      />
      <div>Wind</div>
      <hr />
      <DataLine
        label='Wind speed'
        value={ weather.windspd_kmh }
        symbol='km/h'
      />
      <DataLine
        label='Wind direction'
        value={ weather.winddir_compass }
        symbol='%'
      />
      <span className='weather-icon'>{}</span>
    </div>
    <div className='wind'>
      <span className='arrow' />
      <span className='speed' />
    </div>
    <div className='forecast flex-column'>
      {
        forecast && forecast.Days && forecast.Days.map((day: any, i: number) => {
          const dayOffset = getDayOffset(i)
          return <div key={ `forecast-day-${i}`} className='flex-row space-between'>
            {/* {day.} */}
            {/* <DataLine
                                label={ getDayOffset(i) }
                                value={ <div><b>{day.temp_max_c}º C</b>  / {day.temp_min_c}</div> }
                                symbol='ºC'
                            /> */}
            <div>{ dayOffset }</div>
            <div><b>{day.temp_max_c}º C</b>  / {day.temp_min_c} º C</div>

          </div>
        })
      }
    </div>
  </div>
}

WidgetWeather.defaultProps = {
  duration: 1,
  format: 'celsius' // ['celsius', 'fahrenheit', 'metric', 'imperial']
}

WidgetWeather.config = {
  name: 'Weather',
  type: 'widget:weather',
  icon: 'weather',
  props: [
    {
      name: 'location',
      type: 'text',
      defaultValue: ''
    },
    {
      name: 'format',
      type: 'select',
      defaultValue: 'celsius'
    }
  ]
}

export default WidgetWeather
