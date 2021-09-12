import React from 'react'
import { withProvider } from '../../../../.storybook/utils/provider'
import News from '.'

export default {
  title: 'Features/News',
  component: News,
  decorators: [withProvider]
}

export const NewsStories = () => {
  return (
    <div>
      <News />
    </div>
  )
}
