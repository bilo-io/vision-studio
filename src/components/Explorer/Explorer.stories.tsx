import React from 'react'
import Explorer from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Explorer',
  component: Explorer,
  decorators: [withAppBody, withProvider]
}

export function ExplorerStories () {
  return (
    <div>
      ExplorerStories
    </div>
  )
}
