import React, { useState } from 'react'
import { SearchResource } from 'components/SearchResource'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/SearchResource',
  component: SearchResource,
  decorators: [withAppBody, withProvider]
}

export function SearchResourceStories () {
  const [, setValue] = useState<any>('Search here')
  return (
    <div>
      <SearchResource onChange={(updated: string) => setValue(updated)} />
    </div>
  )
}
