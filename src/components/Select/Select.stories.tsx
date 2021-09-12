import React, { useState } from 'react'
import { Select } from 'components/Select'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Select',
  component: Select,
  decorators: [withAppBody, withProvider]
}

export function SelectStories () {
  type Option = {
    label: string,
    value: string
  }
  const options: Option[] = [
    {
      label: 'Hello',
      value: 'hello'
    },
    {
      label: 'Foo',
      value: 'foo'
    }
  ]

  const [value, setValue] = useState<Option>(null)
  return (
    <div>
      <Select
        defaultValue={options[0]}
        value={value}
        onChange={setValue}
        options={options}
      />
    </div>
  )
}
