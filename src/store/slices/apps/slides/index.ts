import { combineReducers } from '@reduxjs/toolkit'

import slideshows from './slideshows/slideshows-slice'
import screens from './screens/screens-slice'
import schedules from './schedules/schedules-slice'

export default combineReducers({
  slideshows,
  screens,
  schedules
})
