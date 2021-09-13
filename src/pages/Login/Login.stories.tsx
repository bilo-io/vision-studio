import React from 'react'
import Login from './Login'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'
export default {
  title: 'Features/Vision/Auth',
  component: Login,
  decorators: [withAppBody, withProvider]
}

export const LoginStories = () => {
  return (
    <div>
      <Login />
    </div>
  )
}
