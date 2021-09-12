import React from 'react'
import { Navbar } from '.'
import { noop } from 'utils/misc'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'App/Navbar',
  component: Navbar,
  decorators: [withAppBody, withProvider]
}
export function NavbarStories () {
  return (
    <div className={'fill-container'}>
      <Navbar type='desktop' onToggle={noop} />
      <Navbar type='mobile' onToggle={noop} />
    </div>
  )
}
