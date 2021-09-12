import React from 'react'
import Table from '.'
import { withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Table',
  component: Table,
  decorators: [withProvider]
}

export function TableStories () {
  return (
    <div>
      TableStories
    </div>
  )
}
