
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import Login from '../screen/Login/LoginScreen';
import OtpScreen from '../screen/Login/OtpScreen';
import { TransitionPresets } from '@react-navigation/stack';


const MainStackNavigation = () => {
  
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        })} >
          <Stack.Screen name="Login" component={Login} options={{ 
            title: 'הפניקס',
            headerStyle: {
              backgroundColor: 'gray',
            },
           }
            } />
            <Stack.Screen name="Otp" component={OtpScreen} options={{ 
            title: 'הפניקס',
            headerStyle: {
              backgroundColor: 'gray',
            },
           }
            } />
        </Stack.Navigator>
    );
  }

export default MainStackNavigation;