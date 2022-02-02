import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Slideshows = {
    slideshow: {
        data: any[],
        loading: boolean,
        error: null | any
    },
    slideshows: {
        data: any[],
        loading: boolean,
        error: null | any
    }
}

const initialState: Slideshows = {
  slideshow: {
    data: [],
    loading: false,
    error: null
  },
  slideshows: {
    data: [],
    loading: false,
    error: null
  }
}

const SlideshowsSlice = createSlice({
  name: 'slideshows',
  initialState,
  reducers: {
    addSlideshow: (state: Slideshows, action: PayloadAction<any | null>) => {
      const newData = state.slideshows.data?.slice()
      newData?.push(action.payload)

      state.slideshows.data = newData
    }
  }
})

export const {
  addSlideshow
} = SlideshowsSlice.actions

export default SlideshowsSlice.reducer
