import React from 'react'
import { Tabs } from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Tabs',
  component: Tabs,
  decorators: [withAppBody, withProvider]
}

export function TabsStories () {
  return (
    <div>
      <div>Tabs</div>
      {/* <Tabs defaultTab="first" keys={['first', 'second', 'third']}
        // @ts-ignore
        first={
          <div>
                        Tab 1 Content
          </div>
        }
        second={
          <div>
                        Tab 2 Content
          </div>
        }
        third={
          <div>
                        Tab 3 Content
          </div>
        }
      /> */}
    </div>
  )
}
