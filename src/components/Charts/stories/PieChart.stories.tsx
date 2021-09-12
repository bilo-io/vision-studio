import React, { useState } from 'react'
import PieChart from '../PieChart'

import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Core/Charts/PieChart',
  component: PieChart,
  subComponents: [
    PieChart
  ],
  decorators: [withAppBody, withProvider]
}

export function Pie () {
  // eslint-disable-next-line no-unused-vars
  const [pieData, setData] = useState<any[]>(
    [
      {
        code: 'BTC',
        name: 'Bitcoin',
        units: '1.5',
        amount: 750_000
      },
      {
        code: 'ETH',
        name: 'Ethereum',
        units: '7.91',
        amount: 250_000
      },
      {
        code: 'ZAR',
        name: 'Rand',
        units: '148_867.59',
        amount: 148_867.59
      }
    ]
  )

  return (
    <>
      <div>
        <PieChart data={pieData} title="PieChart Story" isLoading={ false } selector="amount"/>
      </div>
    </>
  )
}
