import React from 'react'
import { ActionButtons } from 'components'
import { withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/ActionButton',
  component: ActionButtons,
  decorators: [withProvider]
}

export function ActionButtonStories () {
  return (
    <div>
      <ActionButtons
        onSave={() => alert('clicked save')}
        onClose={() => alert('clicked close')}
        onRemove={() => alert('clicked remove')}/>
    </div>
  )
}
