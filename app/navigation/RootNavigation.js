
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigation from './MainStackNavigation';
import AboutScreen from '../screen/DrawerScreen/AboutScreen';
import AppcenterTestScreen from '../screen/DrawerScreen/AppcenterTestScreen';
import WebViewTexstScreen from '../screen/DrawerScreen/WebViewTexstScreen';
const RootNavigatin = () => {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainStackNavigation} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="AppcenterTest" component={AppcenterTestScreen} />
        <Drawer.Screen name="WebViewTexst" component={WebViewTexstScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigatin;