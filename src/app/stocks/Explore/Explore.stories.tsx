import React from 'react'
import Explore from '.'
import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Features/Slides/Explore',
  component: Explore,
  decorators: [withAppBody, withProvider]
}

export const ExploreStories = () => {
  return (
    <div>
      <Explore />
    </div>
  )
}
