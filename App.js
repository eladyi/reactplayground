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
  Alert,
  ActivityIndicator,
  FlatList
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
import { useGetPostsQuery } from './app/services/provider';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const isDarkMode = useColorScheme() === 'dark';
  const [buildNum, setBuildNum] = useState(0);
  const { data = [], error, isLoading } = useGetPostsQuery();


  console.log(data)


  return (
    
    <SafeAreaView className="mt-8 px-2 flex-1 justify-center items-center bg-slate-400">
      

      
      <View className="items-center mt-20">
        <Text>{count}</Text>
      
      <TouchableOpacity className="bg-indigo-200 h-5 w-20 mt-2" onPress={() => dispatch(increment())}>
        <Text className="text-center">+</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-indigo-200 h-5 w-20 mt-2" onPress={() => dispatch(decrement())}>
        <Text className="text-center">-</Text>
      </TouchableOpacity>
      </View>

      <View className="m-5 bg-slate-400" >
        <Text className="text-center">show posts</Text>

        <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />


        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
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
