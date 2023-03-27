import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
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
    <SafeAreaView className="mt-8 px-2 flex-1 justify-center items-center">
     
    </SafeAreaView>
  );
};

export default HomeScreen;

