import React from 'react'
import AppMenu from '.'
import { withProvider } from '../../../.storybook/utils/provider'
import { noop } from '../../utils/misc'

export default {
  title: 'App/AppMenu',
  component: AppMenu,
  decorators: [withProvider]
}

export function AppMenuStories () {
  return (
    <div>
      <AppMenu isOpen isDark onToggle={noop}/>
    </div>
  )
}
