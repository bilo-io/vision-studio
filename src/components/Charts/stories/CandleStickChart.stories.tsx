import React, { useEffect, useState } from 'react'
import CandleStickChart from '../CandleStickChart'
import axios from 'axios'

import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Core/Charts/CandleStickChart',
  component: CandleStickChart,
  subComponents: [
    CandleStickChart
  ],
  decorators: [withAppBody, withProvider],
  parameters: {
    chromatic: { delay: 500 }
  }
}

export function CandleStick () {
  const [ohlcData, setData] = useState<any[]>([])
  useEffect(() => {
    axios.get('https://demo-live-data.highcharts.com/aapl-ohlc.json')
      .then(response => {
        setData(response.data)
      })
  }, [])
  return (
    <>
      <div>
        <CandleStickChart data={ohlcData} title="PieChart Story" />
      </div>
    </>
  )
}
