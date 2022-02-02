import { combineReducers } from '@reduxjs/toolkit'

// import slideshows from './slides/slideshows/slideshows-slice'
// import screens from './slides/screens/screens-slice'
// import schedules from './slides/schedules/schedules-slice'

import slides from './slides'
import stocks from './stocks'

export default combineReducers({
  slides,
  stocks
})
