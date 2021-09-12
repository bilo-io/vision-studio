import React from 'react'
import { Progress, Circular } from 'components/Progress'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Progress',
  component: Progress,
  decorators: [withAppBody, withProvider]
}

export function ProgressStories () {
  return (
    <div>
      {/* ProgressStories */}
      Progress
      <Progress ratio={0.78} color={'#00adee'} items={[{
        ratio: 0.63,
        name: 'itemOne'
      }, {
        ratio: 0.88,
        name: 'itemTwo'
      }]} />
      Circular
      <Circular progress={0.78} diameter={20} strokeWidth={3} color={'#00adee'} />
    </div>
  )
}
