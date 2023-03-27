import React, { useState } from 'react';
import {
  SafeAreaView, Text, View, TextInput, TouchableOpacity

} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';


const OtpScreen = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [otpNun, setOtpnUM] = React.useState("");
  

  let isDisable =() => {
    return otpNun.length == 0;
  }

  let validateOtp =() => {
  alert("otp validated")
   // navigation.navigate('Otp')
  }

  return (
    <SafeAreaView className="flex-1 items-center">
      
        <Text className="text-left text-xl ml-4 mt-5 text-violet-700 ">הזנת קוד חד פעמי</Text>

        <TextInput
          className="text-right h-10 text-base m-1 border-2 border-slate-200  w-5/6 mt-10"
          onChangeText={setOtpnUM}
          value={otpNun}
          placeholder="הזן קוד"
          keyboardType="numeric"
        />

      <View className="flex-1"/>
      <TouchableOpacity disabled={isDisable()} className="mt h-10 w-10/12 bg-stone-400 rounded-md mb-2 justify-center" onPress={() => {validateOtp() }}>
        <Text className="text-center">שלח קוד</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default OtpScreen;

