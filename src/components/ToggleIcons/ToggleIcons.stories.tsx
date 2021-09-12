import React from 'react'
import ToggleIcons from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/ToggleIcons',
  component: ToggleIcons,
  decorators: [withAppBody, withProvider]
}

export function ToggleIconsStories () {
  return (
    <div>
      <h3>ToggleIcons stories</h3>
      <ToggleIcons items={[]} onChange={(change: any) => { console.log({ change }) }} />
    </div>
  )
}
