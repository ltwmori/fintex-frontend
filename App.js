import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

import NavigationAuth from './src/navigation/NavigationAuth';
import Navigation from './src/navigation';
import {AuthProvider} from './src/context/AuthContext'

import CointDetailsScreen from './src/screens/CoinDetailsScreen';

import LoginScreen from './src/screens/Login'

const App = () => {
  return (
    // // <NavigationContainer>
    // //   <BottomTabNavigator />
    // // </NavigationContainer>
    <NavigationAuth />
    // <AuthProvider>
    //   <StatusBar backgroundColor="#06bcee" />
    //   <Navigation />
    // </AuthProvider>
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