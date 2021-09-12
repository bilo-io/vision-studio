import React from 'react'
import { QueryBuilder } from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Features/Stats/QueryBuilder',
  component: QueryBuilder,
  decorators: [withAppBody, withProvider]
}

export function QueryBuilderStories () {
  return (
    <div>
      QueryBuilderStories
    </div>
  )
}
