import React from 'react'
import Explore from '.'
import { withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Features/Explore',
  component: Explore,
  decorators: [withProvider]
}

export const ExploreStories = () => {
  return (
    <div>
      <Explore />
    </div>
  )
}
