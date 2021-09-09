import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AuthState = {
    isLoggedIn: boolean;
    user: any;
    error: any;
}

const initialState: AuthState = {
  isLoggedIn: false,
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
      state.isLoggedIn = action.payload
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
