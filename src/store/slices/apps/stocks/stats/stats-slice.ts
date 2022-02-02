import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Stats = {
    codes: {
        data: any[],
        loading: boolean,
        error: null | any
    },
}

const initialState: Stats = {
  codes: {
    data: [],
    loading: false,
    error: null
  }
}

const StatsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addCode: (state: Stats, action: PayloadAction<any | null>) => {
      const newData = state.codes.data?.slice()
      newData?.push(action.payload)

      state.codes.data = newData
    },
    removeCode: (state: Stats, action: PayloadAction<any | null>) => {
      const newData = state.codes.data?.slice()
      newData?.splice(action.payload, 1)

      state.codes.data = newData
    }
  }
})

export const {
  addCode,
  removeCode
} = StatsSlice.actions

export default StatsSlice.reducer
