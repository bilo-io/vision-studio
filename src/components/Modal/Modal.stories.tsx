import React from 'react'
import { Modal } from 'components'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Modal',
  component: Modal,
  decorators: [withAppBody, withProvider]
}

export function ModalStories () {
  return (
    <div>
      ModalStories
    </div>
  )
}
