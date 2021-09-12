import React, { useEffect, useState } from 'react'
import { Input } from 'components'
import { videoData as sampleData } from './data'

export const WidgetMediaVideo = ({
  data, options, isEditable, format, style
}: any) => {
  const [state, setState] = useState<any>({

  })

  useEffect(() => {
    const { src, format } = data
    const { width, height, autoplay } = options

    setState({
      src,
      format,
      width,
      height,
      autoplay
    })
  }, [])

  const onChange = (field: string) => (e: any) => {
    setState((prevState: any) => ({
      ...prevState,
      [field]: e.target.value
    }))
  }

  // const { src, format, width, height } = state

  return <div className='flex-col'>
    {
      isEditable && <div className='flex-col'>
        <div>source:</div>
        <Input
          label='Type something...'
          type='text'
          value={ state.src }
          onChange={ onChange('text') }
        />
        <br />
        <div>width:</div>
        <Input
          label='Type something...'
          type='number'
          value={ state.width }
          onChange={ onChange('width') }
        />
        <br />
        <div>height:</div>
        <Input
          label='Type something...'
          type='number'
          value={ state.height }
          onChange={ onChange('height') }
        />
      </div>
    }
    <video
      // controls
      autoPlay
      loop
      width={ state.width }
      height={ state.height }
      style={{ ...style, backgroundColor: 'black' }}>
      <source src={ state.src } type={ `video/${state.format || 'mp4'}` } />
            Your browser does not support the video tag: {format}
    </video>
  </div>
}

WidgetMediaVideo.formats = [
  {
    name: 'MP4',
    format: 'video/mp4'
  },
  {
    name: 'WebM',
    format: 'video/webm'
  },
  {
    name: 'Ogg',
    format: 'video/ogg'
  }
]

WidgetMediaVideo.defaultProps = {
  options: {
    width: 320,
    height: 240,
    autoplay: true
  },
  data: {
    src: sampleData[Math.floor(Math.random() * sampleData.length)],
    format: 'mp4'
  }
}

WidgetMediaVideo.options = {
  name: 'WidgetMediaVideo',
  type: 'widget:video',
  icon: 'video',
  props: [{
    name: 'url',
    type: 'text',
    defaultValue: ''
  }]
}

export default WidgetMediaVideo
