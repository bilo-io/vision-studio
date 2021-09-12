import React, { useEffect, useState } from 'react'
import { Input } from 'components'

export const WidgetMediaText = ({ isEditable, onChange, style, data }: any) => {
  const [state, setState] = useState<any>({ })
  useEffect(() => {
    setState({
      text: data.text
    })
  }, [])

  onChange = (field: string) => (e: any) => {
    setState({
      [field]: e.target.value
    })
  }

  const { text, color } = state

  return <div className='flex-col'>
    {
      isEditable && <div className='flex-col'>
        <Input
          label='Type something...'
          type='text'
          value={ text }
          onChange={ onChange('text') }
        />
        <Input
          label='Color'
          type='color'
          value={ color }
          onChange={ onChange('color') }
        />
      </div>
    }<div style={{ ...style, color }}>{text}</div>
  </div>
}

WidgetMediaText.defaultProps = {
  style: {
    color: '#00adee',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  data: {
    text: 'WidgetMediaText: unspecified data={{ text }} style={{ color, background, ... }}'
  }
}

WidgetMediaText.options = {
  name: 'TextApp',
  type: 'widget:media:text',
  icon: 'font',
  props: [{
    name: 'text',
    type: 'text',
    defaultValue: ''
  }]
}

export default WidgetMediaText
