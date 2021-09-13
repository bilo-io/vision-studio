import React, { useState } from 'react'
import { Layout } from './LayoutView'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { SearchResource } from 'components/SearchResource'

export default {
  title: 'App/AppLayout',
  component: Layout,
  decorators: [withAppBody, withProvider]
}

export function AppLayoutStories () {
  const [value, setValue] = useState<any>('my.email@address')
  return (
    <div style={{ color: '#333' }}>
      <Layout
        isLeftDark
        isRightDark={false}
        leftDiv={<div className="padded"><SearchResource /></div>}
        rightDiv={<div>
          <div className="padded">
            <h3>AppLayout</h3>
            <div>
              <Input value={value} onChange={(value: any) => setValue(value.target.value)} />
            </div>
            <br />
            <div>
              <Button color="primary hollow round">Get Started with Vision</Button>
            </div>
          </div>
        </div>}
      />
    </div>
  )
}
