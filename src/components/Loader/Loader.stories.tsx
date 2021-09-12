/* eslint-disable no-unused-vars */
import React from 'react'
import { Loader, LoaderType } from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Loader',
  component: Loader,
  decorators: [withAppBody, withProvider]
}

export function LoaderStories () {
  return (
    <div>
      <div
        style={{
          margin: 'auto',
          marginTop: 12,
          marginBottom: 12
        }}
      >
        <div className="loader" />
      </div>

      {/* <Loader type={LoaderType.SPINNER} color={'#00adee'} /> */}
    </div>
  )
}
