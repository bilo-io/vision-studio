import React from 'react'
import { Toaster } from 'components'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Toaster',
  component: Toaster,
  decorators: [withAppBody, withProvider]
}

export function ToasterStories () {
  return (
    <div>
      ToasterStories
    </div>
  )
}
