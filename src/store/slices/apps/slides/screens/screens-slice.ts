import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Screens = {
    screen: {
        data: any[],
        loading: boolean,
        error: null | any
    },
    screens: {
        data: any[],
        loading: boolean,
        error: null | any
    }
}

const initialState: Screens = {
  screen: {
    data: [],
    loading: false,
    error: null
  },
  screens: {
    data: [],
    loading: false,
    error: null
  }
}

const ScreensSlice = createSlice({
  name: 'screens',
  initialState,
  reducers: {
    addScreen: (state: Screens, action: PayloadAction<any | null>) => {
      const newData = state.screens.data?.slice()
      newData?.push(action.payload)

      state.screens.data = newData
    }
  }
})

export const {
  addScreen
} = ScreensSlice.actions

export default ScreensSlice.reducer
