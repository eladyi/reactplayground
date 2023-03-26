/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './app/store/counterSlice';


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const isDarkMode = useColorScheme() === 'dark';



  return (

    <SafeAreaView className="mt-8 px-2 flex-1 justify-center items-center bg-slate-400">
    <View><Text>{count}</Text></View>
    <TouchableOpacity style={{}} onPress={()=>dispatch(increment())}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{}} onPress={()=>dispatch(decrement())}>
        <Text>-</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
}


export default () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
