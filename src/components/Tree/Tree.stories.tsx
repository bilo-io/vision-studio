import React from 'react'
import { Tree } from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Tree',
  component: Tree,
  decorators: [withAppBody, withProvider]
}

export function TreeStories () {
  const data = {
    hello: {
      world: {
        foo: 'bar',
        alpha: 'bravo',
        alice: 'bob'
      }
    }
  }

  return (
    <div style={{ height: '100%' }}>
      <Tree data={data} />
    </div>
  )
}
