import React, { useState } from 'react';
import { SafeAreaView, Text} from 'react-native';
import { useSelector } from 'react-redux'



const AboutScreen = ({ navigation }) => {

  const deviceId = useSelector((state) => state.device.deviceId)


  return (
    <SafeAreaView className="flex-1 items-center mt-1">
      <Text className="text-left"> DEVICE ID : {deviceId} </Text>
       
    </SafeAreaView>
  );
};

export default AboutScreen;

