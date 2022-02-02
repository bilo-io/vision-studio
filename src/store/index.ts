import { configureStore } from '@reduxjs/toolkit'
import app from './slices/app/app-slice'
import apps from './slices/apps'
import auth from './slices/auth/auth-slice'

export const store = configureStore({
  reducer: {
    app,
    apps,
    auth
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
