import WidgetUpload from './upload'

// Social
import WidgetGoogle from './google'
import WidgetInstagram from './instagram'
import WidgetSoundcloud from './soundcloud'
import WidgetVimeo from './vimeo'
import WidgetYoutube from './youtube'

// Media
import WidgetMediaAudio from './media/audio'
import WidgetMediaImage from './media/image'
import WidgetMediaText from './media/text'
import WidgetMediaVideo from './media/video'
import WidgetMediaMaster from './media/master'

// Misc
import WidgetDataModel from './data/model'
import WidgetDataFilter from './data/filter'
import WidgetExchanges from './exchanges'
import WidgetMap from './map'
import WidgetNews from './news'
import WidgetWeather from './weather'

// Time
import WidgetCalendar from './calendar'
import WidgetClock from './clock'
import WidgetWorldClock from './world-clock'
import WidgetCountdown from './countdown'
// import WidgetEmbed from './embed-ui'

// TODO: align with other files

export default [
  WidgetUpload.config,

  // Social
  WidgetGoogle.config,
  WidgetInstagram.config,
  WidgetSoundcloud.config,
  WidgetVimeo.config,
  WidgetYoutube.config,

  // Media
  WidgetMediaAudio.config,
  WidgetMediaImage.config,
  WidgetMediaText.config,
  WidgetMediaVideo.config,
  WidgetMediaMaster.config,

  // Misc
  WidgetDataFilter.config,
  WidgetDataModel.config,
  WidgetExchanges.config,
  WidgetMap.config,
  WidgetNews.config,
  WidgetWeather.config,

  // Time
  WidgetCalendar.config,
  WidgetClock.config,
  WidgetCountdown.config,
  WidgetWorldClock.config
]
