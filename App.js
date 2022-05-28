import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

import CointDetailsScreen from './src/screens/CoinDetailsScreen';

import Login from './src/screens/Login'

const App = () => {
  return (
    // <NavigationContainer>
    //   <BottomTabNavigator />
    // </NavigationContainer>
    <Login/>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171930",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App; 