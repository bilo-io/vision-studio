import React from 'react'
import Stats from '.'
import { withAppBody, withMemoryRouter, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Features/Stocks/Stats',
  component: Stats,
  decorators: [withAppBody, withProvider, withMemoryRouter],
  parameters: {
    chromatic: { delay: 500 }
  }
}

export const StatsStories = () => {
  return (
    <div>
      <Stats />
    </div>
  )
}
