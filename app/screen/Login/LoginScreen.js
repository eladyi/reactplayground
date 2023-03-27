import React, { useState } from 'react';
import {
  SafeAreaView, Text, View, TextInput, TouchableOpacity

} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { useGetPostsQuery } from './../../services/provider';

const LoginScreen = ({ navigation }) => {
  const [idNum, setIdNum] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");

  let isDisable =() => {
    return idNum.length == 0 && phonenumber.length == 0
  }
  let sendOtp =() => {
    navigation.navigate('Otp')
  }

  return (
    <SafeAreaView className="flex-1 items-center">
      
        <Text className="text-left text-xl ml-4 mt-10 text-violet-700 ">טוב שבאת!</Text>
        <Text className="text-left text-xl ml-4 mt-5 text-violet-700 ">זיהוי חד פעמי</Text>

        <TextInput
          className="text-right h-10 text-base m-1 border-2 border-slate-200  w-5/6 mt-10"
          onChangeText={setIdNum}
          value={idNum}
          placeholder="מספר זהות"
          keyboardType="numeric"
        />

        <TextInput
          className="text-right h-10 text-base m-1 border-2 border-slate-200  w-5/6 mt-5"
          onChangeText={setPhoneNumber}
          value={phonenumber}
          placeholder="טלפון נייד"
          keyboardType="numeric"
        />
      
      <View className="flex-1"/>
      <TouchableOpacity disabled={isDisable()} className="mt h-10 w-10/12 bg-stone-400 rounded-md mb-2 justify-center" onPress={() => sendOtp()}>
        <Text className="text-center">קבלת קוד</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default LoginScreen;

