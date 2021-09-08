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
    setUser: (state, action: PayloadAction<number>) => {
      state.user = action.payload
    }
  }
})

export const {
  setUser
} = AuthSlice.actions

export default AuthSlice.reducer
