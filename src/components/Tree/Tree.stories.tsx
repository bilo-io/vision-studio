import React from 'react'
import { Tree } from '.'

export default {
  title: 'Core/Tree',
  component: Tree
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
