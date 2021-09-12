import React from 'react'
import Stats from '.'
import { MemoryRouter } from 'react-router'
import { withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Features/Stats',
  component: Stats,
  decorators: [withProvider, (Story: any) => (<MemoryRouter><Story/></MemoryRouter>)]
}

export const StatsStories = () => {
  return (
    <div>
      <Stats />
    </div>
  )
}
