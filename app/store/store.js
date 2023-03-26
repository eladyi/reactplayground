import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { providerApi } from '../services/provider'


import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [providerApi.reducerPath]: providerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(providerApi.middleware),
})

setupListeners(store.dispatch)
