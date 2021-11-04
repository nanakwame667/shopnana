

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import {useFonts} from 'expo-font';

import AppLoading from 'expo-app-loading';

import TabNavigator from './src/navigation/TabNav';
import LogInScreen from './src/screens/LogInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import OnBoardingScreen from './src/screens/onBoardingScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  let [fontLoaded]= useFonts({
    Poppins_Light: require('./src/assets/fonts/Poppins-Light.ttf'),
    Poppins_Regular: require('./src/assets/fonts/Poppins-Regular.ttf'),
    Poppins_Medium: require('./src/assets/fonts/Poppins-Medium.ttf'),
    Poppins_SemiBold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    Poppins_Bold: require('./src/assets/fonts/Poppins-Bold.ttf'),
    Poppins_ExtraBold: require('./src/assets/fonts/Poppins-ExtraBold.ttf')
  });
  if (!fontLoaded){
    return <AppLoading/>;
  }else{
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="onBoarding" component={OnBoardingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins_Regular'
  },
});
