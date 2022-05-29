import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import SearchScreen from '../screens/SearchScreen';
import {AuthContext} from '../context/AuthContext';
import MainStack from './MainStack';
import BottomTabNavigator from './BottomTabNavigator';

// import SplashScreen from '../screens/SplashScreen';
//
const Stack = createNativeStackNavigator();

const NavigationAuth = () => {
  //const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
            <Stack.Screen name="MainStack" component={MainStack} options={{headerShown:false}} />

        </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default NavigationAuth;