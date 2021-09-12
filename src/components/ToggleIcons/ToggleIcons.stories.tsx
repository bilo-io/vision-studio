import React from 'react'
import ToggleIcons from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Misc/ToggleIcons',
  component: ToggleIcons,
  decorators: [withAppBody, withProvider]
}

export function ToggleIconsStories () {
  const items = [
    {
      name: 'Minibus Taxi',
      value: 'ShareTaxi',
      icon: 'train'
    },
    {
      name: 'Light Rail',
      value: 'LightRail',
      icon: 'train'
    },
    {
      name: 'Bus',
      value: 'Bus',
      icon: 'bus'
    },
    {
      name: 'Coach',
      value: 'Coach',
      icon: 'bus-alt'
    },
    {
      name: 'Ferry',
      value: 'Ferry',
      icon: 'ship'
    },
    {
      name: 'Subway',
      value: 'Subway',
      icon: 'subway'
    },
    {
      name: 'Train',
      value: 'Rail',
      icon: 'train'
    }
  ]

  return (
    <div>
      <h3>ToggleIcons stories</h3>
      <ToggleIcons
        isDefaultActive
        items={items}
        onChange={(change: any) => {
          console.log({ change })
        }} />
    </div>
  )
}
