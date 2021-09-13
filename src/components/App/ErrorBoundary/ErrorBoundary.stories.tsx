import React from 'react'
import { ErrorBoundary } from 'components'
import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'App/ErrorBoundary',
  component: ErrorBoundary,
  decorators: [withAppBody, withProvider]
}

export function ErrorBoundaryStories () {
  const array = [{ label: 'Zero' }]
  return (
    <div>
      <div>
        <ErrorBoundary>
        This should be visible as it is wrapped around an error boundary without an error
        </ErrorBoundary>
      </div>

      <br />

      <div>
        <ErrorBoundary>
        This should render with an error because of OutOfBounds array access {array[2]?.label}
        </ErrorBoundary>
      </div>

    </div>
  )
}
