import React, { useState } from 'react'
import { Input } from 'components/Core/Input'
import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Core/Forms/Input',
  component: Input,
  decorators: [withAppBody, withProvider]
}

export function InputStories () {
  const [value, setValue] = useState<string>('Type something here')

  return (
    <div>
      <div>Custom label</div>
      <Input value={value} onChange={(text: string) => setValue(text)} />
    </div>
  )
}
