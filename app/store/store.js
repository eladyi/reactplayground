import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { providerApi } from '../services/provider'
import counterReducer from './counterSlice'
import deviceReducer from './deviceSlice'
const createDebugger = require('redux-flipper').default; // <-- ADD THIS
import { combineReducers } from 'redux'



const configureCustomStore = () => {
  const rootReducer = combineReducers({
    counter: counterReducer,
    device: deviceReducer,
    [providerApi.reducerPath]: providerApi.reducer,
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => __DEV__ ? getDefaultMiddleware({ serializableCheck: false }).concat(createDebugger()) : getDefaultMiddleware({
      serializableCheck: false
    }),

  });

  return { store };
};

export const { store } = configureCustomStore();

setupListeners(store.dispatch)
