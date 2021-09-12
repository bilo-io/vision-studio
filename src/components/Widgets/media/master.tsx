// #region Modules
import React from 'react'
// #endregion Modules

// #region Components
import WidgetMediaAudio from './audio'
import WidgetMediaImage from './image'
import WidgetMediaText from './text'
import WidgetMediaVideo from './video'
import MediaNotSupported from './not-supported'
// #endregion

// #region Assets & Data
// #endregion

export const WidgetMediaMaster = ({ data, options, type }: {
  data: { url?: string, src?: string, format?: string},
  options?: any | any[],
  type?:
  'image' | 'widget:media:image' |
  'audio' | 'widget:media:audio' |
  'video' | 'widget:media:video' |
  'text' | 'widget:media:text'
}) => {
  const id = `vision-master-media_${(new Date().toISOString())}`

  const renderMedia = () => {
    const props = {
      data,
      options
    }

    switch (type) {
    case 'widget:media:audio':
      return <WidgetMediaAudio { ...props } />
    case 'widget:media:image':
      return <WidgetMediaImage { ...props } />
    case 'widget:media:text':
      return <WidgetMediaText { ...props } />
    case 'widget:media:video':
      return <WidgetMediaVideo { ...props } />
    default:
      return <MediaNotSupported type={type} />
    }
  }

  return ( // TODO: make id uniq
    <div>
      <div id={ id }>{renderMedia()}</div>
    </div>
  )
}

// see master chart/widget
// TODO: .types
// TODO .options

export default WidgetMediaMaster
