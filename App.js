/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Provider } from "react-redux";
import { store } from "./app/store/store";

import RootNavigatin from './app/navigation/RootNavigation';
function App() {
  return (
    <RootNavigatin/>
  );
}


export default () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
