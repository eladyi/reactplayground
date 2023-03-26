import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  FlatList
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './../../store/counterSlice';
import { useGetPostsQuery } from './../../services/provider';

const HomeScreen = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
 
  const [buildNum, setBuildNum] = useState(0);
  const { data = [], error, isLoading } = useGetPostsQuery();

  return (
    <SafeAreaView className="mt-8 px-2 flex-1 justify-center items-cente bg-lime-600">
      <View className="w-screen bg-yellow-200 h-4">

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
};

export default HomeScreen;

