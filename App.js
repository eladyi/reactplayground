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
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
