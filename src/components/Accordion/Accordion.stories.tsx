import React from 'react'
import { Accordion } from 'components'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Accordion',
  component: Accordion,
  decorators: [withAppBody, withProvider]
}

export function AccordionStories () {
  return (
    <div>
      <Accordion isOpenDefault title="Accordion 0: Inline Text">
        This Accordion is open by default
      </Accordion>
      <Accordion title="Accordion 1: Inline Text">
        This is an accordion with inline text
      </Accordion>
      <Accordion title="Accordion 2: Nested Accordion">
        <Accordion title="ChildAccordion: this one is nested inside Accordion 2">
          Hello world
        </Accordion>
      </Accordion>
    </div>
  )
}
