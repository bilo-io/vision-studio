import React from 'react'
import { Explorer } from './index'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Vision/Explorer',
  component: Explorer,
  decorators: [withAppBody, withProvider]
}

export function ExplorerStories () {
  const resources = [
    {
      id: 0,
      name: 'First in the tree',
      resources: [
        {
          name: 'Dude', id: 2
        }
      ]
    },
    {
      id: 1, name: 'Second in the tree'
    }
  ]
  return (
    <div>
      <Explorer
        resources={resources}
        // collections={resources}
        showPath
        rootPath={'schedules/'}
        name={'Schedules'}
        resourceIcon='pencil'
        onClickItem={(item: any) => {
          alert('clicked item' + JSON.stringify(item, undefined, 2))
        }}
      />
    </div>
  )
}
