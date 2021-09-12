import React from 'react'
import Table from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Table',
  component: Table,
  decorators: [withAppBody, withProvider]
}

export function TableStories () {
  return (
    <div>
      TableStories
    </div>
  )
}
