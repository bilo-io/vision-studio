import React, { useState } from 'react'
import { Layout } from './LayoutView'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'
import { Input } from 'components/Input'
import { Button } from 'components/Button'

export default {
  title: 'App/AppLayout',
  component: Layout,
  decorators: [withAppBody, withProvider]
}

export function AppLayoutStories () {
  const [value, setValue] = useState<any>('Type something here')
  return (
    <div>
      <Layout
        isLeftDark
        isRightDark={false}
        leftDiv={<div>Left Div</div>}
        rightDiv={<div>
          <div>
            <Input value={value} onChange={(value: any) => setValue(value.target.value)}/>
            <Button>Hello</Button>
          </div>
        </div>}
      />
    </div>
  )
}
