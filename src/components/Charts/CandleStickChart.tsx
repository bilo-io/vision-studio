import React, { useEffect, useState } from 'react'
// import Highcharts from 'highcharts'
import HighStock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const staticOptions = {
  title: {
    text: 'CandleStickChart'
  },
  chart: {
    renderTo: 'container',
    type: 'candlestick',
    backgroundColor: 'transparent',
    gridLineWidth: 0
    // colorAxis: [{
    //   gridLineColor: 'transparent'
    // }]
  },
  colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
    '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
  colorCount: 2,
  lineColor: '#ff0000',
  plotOptions: {
    candlestick: {
    }
  }
}

const CandleStickChart = ({ title, data }: { title: string, data: any[]}) => {
  const [options, setOptions] = useState<any>({
    ...staticOptions
  })

  useEffect(() => {
    setOptions({
      ...staticOptions,
      // @ts-ignore
      title: {
        text: title
      },
      series: [{
        type: 'candlestick',
        name: 'AAPL Stock Price',
        data,
        dataGrouping: {
          units: [
            [
              'week', // unit name
              [1] // allowed multiples
            ], [
              'month',
              [1, 2, 3, 4, 6]
            ]
          ]
        }
      }]
    })
  }, [data])
  return (
    <div>
      <HighchartsReact
        highcharts={HighStock}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  )
}

export default CandleStickChart
