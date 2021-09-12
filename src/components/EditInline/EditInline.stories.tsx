import React, { useState } from 'react'
import { EditInline } from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Forms/EditInline',
  component: EditInline,
  decorators: [withAppBody, withProvider]
}
export function EditInlineStories () {
  const [text, setText] = useState<any>('hover here and click, then type to edit')
  return (
    <div>
      <EditInline
        value={text}
        onChange={(value: any) => setText(value)}
      />
    </div>
  )
}
