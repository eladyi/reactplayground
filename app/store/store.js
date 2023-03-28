import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { providerApi } from '../services/provider'


import counterReducer from './counterSlice'
import deviceReducer from './deviceSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    device: deviceReducer,
    [providerApi.reducerPath]: providerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(providerApi.middleware)
})

setupListeners(store.dispatch)
