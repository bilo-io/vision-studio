import React from 'react'
import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'
import News from '.'

export default {
  title: 'Features/Stats/News',
  component: News,
  decorators: [withAppBody, withProvider]
}

export const NewsStories = () => {
  return (
    <div>
      <News />
    </div>
  )
}
