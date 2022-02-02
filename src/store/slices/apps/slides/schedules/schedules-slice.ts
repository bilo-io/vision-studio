import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Schedules = {
    schedule: {
        data: any[],
        loading: boolean,
        error: null | any
    },
    schedules: {
        data: any[],
        loading: boolean,
        error: null | any
    }
}

const initialState: Schedules = {
  schedule: {
    data: [],
    loading: false,
    error: null
  },
  schedules: {
    data: [],
    loading: false,
    error: null
  }
}

const SchedulesSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    addSchedule: (state: Schedules, action: PayloadAction<any | null>) => {
      const newData = state.schedules.data?.slice()
      newData?.push(action.payload)

      state.schedules.data = newData
    }
  }
})

export const {
  addSchedule
} = SchedulesSlice.actions

export default SchedulesSlice.reducer
