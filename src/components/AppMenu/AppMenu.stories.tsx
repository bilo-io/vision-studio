import React from 'react'
import AppMenu from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'
import { noop } from '../../utils/misc'

export default {
  title: 'App/AppMenu',
  component: AppMenu,
  decorators: [withAppBody, withProvider]
}

export function AppMenuStories () {
  return (
    <div>
      <AppMenu isOpen isDark onToggle={noop}/>
    </div>
  )
}
