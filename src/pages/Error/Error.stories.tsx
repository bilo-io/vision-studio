import React from 'react'
import Error from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'App/Error',
  component: Error,
  decorators: [withAppBody, withProvider]
}

export const ExploreStories = () => {
  return (
    <div>
      <Error />
    </div>
  )
}
