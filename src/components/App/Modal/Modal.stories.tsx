import React from 'react'
import { Modal } from 'components/App/Modal'
import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'
import Button from 'components/Core/Button'

export default {
  title: 'App/Modal',
  component: Modal,
  decorators: [withAppBody, withProvider]
}

export function ModalStories () {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Modal header={'Default Modal'} isOpen onClose={() => { }}
        footer={<div>
          <Button color="primary">Hello</Button>
        </div>}
      >
        {'Cool. Just stay in the driveway; the kill-bots are live, and I took you off the whitelist. Slow down! Uh ohhh! Somersault jump! I\'ll be with Reuben in my workshop while you guys are having another day in Phil Collins proverbial paradise.'}
      </Modal>
    </div>
  )
}
