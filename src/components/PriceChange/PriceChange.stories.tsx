import React from 'react'
import PriceChange from 'components/PriceChange'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/PriceChange',
  component: PriceChange,
  decorators: [withAppBody, withProvider]
}

export const PriceChangeStory = () => {
  return (
    <div>
      <div style={{ width: '10rem' }}>
        <PriceChange value={100} percentage={3.4}/>
      </div>
    </div>
  )
}
