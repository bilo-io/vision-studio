import React from 'react'
import { AppInfo } from '.'
import { withAppBody, withMemoryRouter, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'App/AppInfo',
  component: AppInfo,
  decorators: [withAppBody, withProvider, withMemoryRouter],
  parameters: {
    chromatic: { delay: 200 }
  }
}

export function AppInfoStories () {
  return (
    <div>
      <AppInfo
        isVisible
        setAuthenticated={(value: boolean) => { console.log(`isAuthenticated: ${value}`) }}
      />
    </div>
  )
}
