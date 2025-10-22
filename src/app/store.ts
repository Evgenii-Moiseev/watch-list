import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { movieApiSlice } from './movieApiSlice'
import { authApiSlice } from './authApiSlice'
import { favoritesApiSlice } from './favoritesApiSlice'
import { authModalSlice } from './authModalSlice'

const rootReducer = combineSlices(
  movieApiSlice,
  authApiSlice,
  favoritesApiSlice,
  authModalSlice
)

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieApiSlice.middleware,
      authApiSlice.middleware,
      favoritesApiSlice.middleware,
    ]),
})
