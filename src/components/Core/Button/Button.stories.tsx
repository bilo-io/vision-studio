import React from 'react'
import Button from 'components/Core/Button'
import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Core/Forms/Button',
  component: Button,
  decorators: [withAppBody, withProvider]
}

export const ButtonStory = () => {
  const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'white']
  const shapes = ['solid', 'hollow', 'round', 'big-round']
  const icons = ['square', 'check-circle', 'info-circle', 'exlamation-circle', 'exclamation-triangle']
  return (
    <div className="flex-col">
      {
        shapes.map((shape, s) => (
          <div key={s}>
            {
              colors.map((color, c) => (
                <Button
                  key={`${s}-${c}`}
                  color={color}
                  shape={shape}
                >
                  {shape === 'big-round' ? icons[c] : color.toUpperCase()}
                </Button>
              ))

            }
          </div>
        ))}

    </div>
  )
}
