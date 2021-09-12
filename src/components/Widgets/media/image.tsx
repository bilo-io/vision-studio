import React, { useEffect, useState } from 'react'
import { Input } from 'components'
import randomMedia from 'utils/mock/media'

export const WidgetMediaImage = ({
  isEditable,
  data,
  duration,
  onDataChange,
  onNext
}: {
    isEditable?: boolean, data: any | any[], duration: number, options?: any, onDataChange: Function, onNext?: Function }) => {
  const [url, setUrl] = useState<string>('')

  useEffect(() => {
    // @ts-ignore
    setTimeout(onNext, duration * 1000)
    setUrl((data?.url) || randomMedia('image'))
  }, [])

  const onChange = (e: any) => {
    const url = e.target.value
    setUrl(url)
    onDataChange({ url })
  }

  return <div className='flex-col'>
    {
      isEditable && <Input
        label='Type something...'
        type='text'
        value={ url }
        onChange={onChange}
      />
    }
    <img src={ url } />
  </div>
}

WidgetMediaImage.defaultProps = {
  onDataChange: (data: any) => console.log('define WidgetMediaImage.onDataChange()'),
  data: {
    url: randomMedia('image')
  },
  duration: 3
}

WidgetMediaImage.config = {
  name: 'ImageApp',
  type: 'widget:media:image',
  icon: 'image',
  props: [{
    name: 'url',
    type: 'text',
    defaultValue: ''
  }]
}

export default WidgetMediaImage
