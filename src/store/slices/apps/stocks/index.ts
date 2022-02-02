import { combineReducers } from '@reduxjs/toolkit'

import explore from './explore/explore-slice'
import stats from './stats/stats-slice'

export default combineReducers({
  explore,
  stats
})
