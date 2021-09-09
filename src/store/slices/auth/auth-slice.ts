import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AuthState = {
    isAuthenticated: boolean;
    user: any;
    error: any;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null
}

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any | null>) => {
      state.user = action.payload
    },
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    setAuthError: (state, action: PayloadAction<any | null>) => {
      state.error = action.payload
    }
  }
})

export const {
  setUser,
  setAuthStatus,
  setAuthError
} = AuthSlice.actions

export default AuthSlice.reducer
