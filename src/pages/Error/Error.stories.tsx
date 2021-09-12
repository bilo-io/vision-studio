import React from 'react'
import Error from '.'
import { withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'App/Error',
  component: Error,
  decorators: [withProvider]
}

export const ExploreStories = () => {
  return (
    <div>
      <Error />
    </div>
  )
}
