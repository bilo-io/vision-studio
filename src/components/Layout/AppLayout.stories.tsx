import React from 'react'
import { Layout } from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'
export default {
  title: 'App/AppLayout',
  component: Layout,
  decorators: [withAppBody, withProvider]
}

export function AppLayoutStories () {
  return (
    <div>
      AppLayoutStories
    </div>
  )
}
