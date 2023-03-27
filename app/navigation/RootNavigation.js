
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import Login from '../screen/Login/LoginScreen';
import OtpScreen from '../screen/Login/OtpScreen';


const RootNavigatin = () => {
  
    const Stack = createNativeStackNavigator();
    
    return (
      <NavigationContainer>
        <Stack.Navigator>
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
              backgroundColor: 'green',
            },
           }
            } />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default RootNavigatin;