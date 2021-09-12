import React from 'react'
import { ErrorBoundary } from 'components'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'App/ErrorBoundary',
  component: ErrorBoundary,
  decorators: [withAppBody, withProvider]
}

export function ErrorBoundaryStories () {
  return (
    <div>
      ErrorBoundaryStories
    </div>
  )
}
