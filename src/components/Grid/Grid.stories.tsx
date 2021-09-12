import React from 'react'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'
import MasterGrid from './master'

export default {
  title: 'Core/Grid',
  component: MasterGrid,
  decorators: [withAppBody, withProvider]
}

export function GridStories () {
  return (
    <div>
      <MasterGrid />
    </div>
  )
}
