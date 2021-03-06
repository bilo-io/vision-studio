import React from 'react'
import Async from '.'
import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'
import { noop } from '../../../utils/misc'

export default {
  title: 'App/Async',
  component: Async,
  decorators: [withAppBody, withProvider]
}

export function AsyncStories () {
  return (
    <div>
      <div>Loading</div>
      <Async isLoading isDark onToggle={noop}>
                You should not be able to see this.
      </Async>

      <div>Success</div>
      <Async isLoading isDark onToggle={noop}>
                You should be able to see this.
      </Async>

      <div>Error</div>
      <Async isLoading isDark onToggle={noop}>
                You should see the error being handled here.
      </Async>
    </div>
  )
}
