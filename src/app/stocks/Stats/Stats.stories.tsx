import React from 'react'
import Stats from '.'
import { withAppBody, withMemoryRouter, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Features/Stats',
  component: Stats,
  decorators: [withAppBody, withProvider, withMemoryRouter]
}

export const StatsStories = () => {
  return (
    <div>
      <Stats />
    </div>
  )
}
