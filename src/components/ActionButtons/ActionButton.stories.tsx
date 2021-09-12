import React from 'react'
import { ActionButtons } from 'components'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Misc/ActionButton',
  component: ActionButtons,
  decorators: [withAppBody, withProvider]
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
