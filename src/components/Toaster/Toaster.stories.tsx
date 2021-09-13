import React, { useState } from 'react'
import { Button } from 'components/Button'
import { Toaster } from 'components/Toaster'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'App/Toaster',
  component: Toaster,
  decorators: [withAppBody, withProvider]
}

export function ToasterStories () {
  const [toast, setToast] = useState<any>(null)
  return (
    <div className="full-screen">
      <h3>Click one of the buttons below to see a toast</h3>
      <div style={{ marginTop: '4rem' }}>
        <Button className="success hollow" color="primary" onClick={() => setToast({
          content: 'New success toast',
          type: 'success'
        })}>
        Click to show toaster
        </Button>

        <Button className="success hollow" color="warning" onClick={() => setToast({
          content: 'New warning toast',
          type: 'warning'
        })}>
        Click to show toaster
        </Button>

        <Button className="success hollow" color="error" onClick={() => setToast({
          content: 'New error toast',
          type: 'error'
        })}>
        Click to show toaster
        </Button>
      </div>

      <Toaster toast={toast} />
    </div>
  )
}
