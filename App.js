/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert
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
import AppCenter from 'appcenter';


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const isDarkMode = useColorScheme() === 'dark';
  const [buildNum, setBuildNum] = useState(0);


  AppCenter.getInstallId().then(installId => {
    const buildNumber = installId.split(':')[1];
    alert(buildNumber);
    setBuildNum(buildNumber)
  });

  return (

    <SafeAreaView className="mt-8 px-2 flex-1 justify-center items-center bg-slate-400">
    <View>
      <Text>{count}</Text>
    </View>
    <TouchableOpacity className="bg-indigo-200 h-5 w-20 mt-2" onPress={()=>dispatch(increment())}>
        <Text className="text-center">+</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-indigo-200 h-5 w-20 mt-2"  onPress={()=>dispatch(decrement())}>
        <Text className="text-center">-</Text>
      </TouchableOpacity>

      <View className="mt-2">
      <Text> Build number : {buildNum}</Text>
     </View>
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
