import React from 'react'
import { QueryBuilder } from '.'
import { withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/QueryBuilder',
  component: QueryBuilder,
  decorators: [withProvider]
}

export function QueryBuilderStories () {
  return (
    <div>
      QueryBuilderStories
    </div>
  )
}
