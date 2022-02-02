import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Explore = {
    product: {
        data: any[],
        loading: boolean,
        error: null | any
    },
    products: {
        data: any[],
        loading: boolean,
        error: null | any
    }
}

const initialState: Explore = {
  product: {
    data: [],
    loading: false,
    error: null
  },
  products: {
    data: [],
    loading: false,
    error: null
  }
}

const ExploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    addProductToFavourites: (state: Explore, action: PayloadAction<any | null>) => {
      const newData = state.products.data?.slice()
      newData?.push(action.payload)

      state.products.data = newData
    }
  }
})

export const {
  addProductToFavourites
} = ExploreSlice.actions

export default ExploreSlice.reducer
