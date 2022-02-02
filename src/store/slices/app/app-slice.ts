import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AppState = {
    errors: {
        clientErrors: any[]; // Exceptions (no internet, etc.)
        serverErrors: any[]; // 500+ statusCodes
    };
}

const initialState: AppState = {
  errors: {
    clientErrors: [],
    serverErrors: []
  }

}

const AppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    addServerError: (state: AppState, action: PayloadAction<any | null>) => {
      const newErrors = state.errors.serverErrors?.slice()
      newErrors.push(action.payload)

      state.errors.serverErrors = newErrors
    }
  }
})

export const {
  addServerError
} = AppSlice.actions

export default AppSlice.reducer
