import React from 'react'
import WidgetNotSupported from './not-supported'

import {
  // Social
  WidgetGoogle,
  WidgetInstagram,
  WidgetSoundcloud,
  WidgetVimeo,
  WidgetYoutube,

  // Media
  WidgetMediaImage,
  WidgetMediaText,
  WidgetMediaAudio,
  WidgetMediaVideo,
  WidgetMediaMaster,
  WidgetUpload,

  // Misc
  WidgetEmbed,
  WidgetMap,
  WidgetNews,
  WidgetWeather,

  // Time
  WidgetCalendar,
  WidgetClock
  // WidgetCountdown,
  // WidgetWorldClock

} from '..'

export const WidgetMaster = ({
  isEditable,
  onDelete,
  onChange,
  data,
  type
}: {
  isEditable: boolean,
  onDelete: Function,
  onChange: Function,
  data: any | any[],
  type: string
}) => {
  const props = {
    data,
    isEditable,
    onDelete,
    onChange
  }

  // TODO: proper name-spacing of widgets => categories

  switch (type) {
  case 'widget:upload':
    return <WidgetUpload { ...props } />

    // Social
    // --------------------------------------
  case 'widget:instagram':
    return <WidgetInstagram { ...props } />
  case 'widget:soundcloud':
    return <WidgetSoundcloud { ...props } />
  case 'widget:youtube':
    return <WidgetYoutube { ...props } />
  case 'widget:vimeo':
    return <WidgetVimeo { ...props } />

    // Media
    // --------------------------------------
  case 'widget:media:audio':
    return <WidgetMediaAudio { ...props } />
  case 'widget:media:image':
    return <WidgetMediaImage { ...props } />
  case 'widget:media:text':
    return <WidgetMediaText { ...props } />
  case 'widget:media:video':
    return <WidgetMediaVideo { ...props } />
  case 'widget:media:master':
    return <WidgetMediaMaster {...props} />

    // Google
    // --------------------------------------
  case 'widget:google:docs':
  case 'widget:google:sheets':
  case 'widget:google:slides':
    return <WidgetGoogle type={ type.split(':').pop() } { ...props } />

    // Misc
    // --------------------------------------
  case 'widget:embed':
    return <WidgetEmbed { ...props } />
  case 'widget:map':
    return <WidgetMap { ...props } />
  case 'widget:news':
    return <WidgetNews { ...props } />
  case 'widget:weather':
    return <WidgetWeather { ...props } />

    // Time
    // --------------------------------------
  case 'widget:calendar':
    return <WidgetCalendar { ...props } />
  case 'widget:clock':
    return <WidgetClock { ...props } />

    // TODO:
    // case 'widget:countdown':
    //     return <WidgetCountdown { ...props } />

    // TODO:
    // case 'widget:world-clock':
    //     return <WidgetWorldClock { ...props } />

    // --------------------------------------
  default:
    return <WidgetNotSupported type={ type } />
  }
}

export default WidgetMaster
