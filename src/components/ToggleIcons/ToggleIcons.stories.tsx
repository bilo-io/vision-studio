import React from 'react'
import ToggleIcons from '.'

export default {
  title: 'Core/ToggleIcons',
  component: ToggleIcons
}

export function ToggleIconsStories () {
  return (
    <div>
      <h3>ToggleIcons stories</h3>
      <ToggleIcons items={[]} onChange={(change: any) => { console.log({ change }) }} />
    </div>
  )
}
