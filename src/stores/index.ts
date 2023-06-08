import api from '@api'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: combineReducers({}),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export default store
