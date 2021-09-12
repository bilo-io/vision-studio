import React from 'react'
import { Accordion } from 'components'
import { withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Accordion',
  component: Accordion,
  decorators: [withProvider]
}

export function AccordionStories () {
  return (
    <div>
      AccordionStories
    </div>
  )
}
