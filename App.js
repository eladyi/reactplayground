/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';

import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { getManufacturer,getUniqueId} from 'react-native-device-info';
import { useSelector, useDispatch } from 'react-redux'

import {setDeviceId } from './app/store/deviceSlice'

import RootNavigatin from './app/navigation/RootNavigation';

const App=()=> {

  const dispatch = useDispatch();

  useEffect(() => {
    getUniqueId().then(id=>{
      dispatch(setDeviceId(id))
    })
  },[]);


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
