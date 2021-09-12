import React from 'react'
import Login from '.'
import { withProvider } from '../../../.storybook/utils/provider'
export default {
  title: 'Features/Auth',
  component: Login,
  decorators: [withProvider]
}

export const LoginStories = () => {
  return (
    <div>
      <Login />
    </div>
  )
}
