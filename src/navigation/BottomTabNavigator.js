import react from "react";
import {View, Text} from 'react-native'; 

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from '../screens/HomeScreen'; 
import SettingsScreen from '../screens/SettingsScreen'; 
import SearchScreen from '../screens/SearchScreen'; 

import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "react-native/Libraries/NewAppScreen";

const homeName = 'Home'; 
const seachName = 'Search'; 
const settingName = 'Settings'; 

const Tab = createBottomTabNavigator(); 

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator tabBarOptions={{
            // style: styles.tabBar,
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.dark,
            showLabel: false
          }} 
          screenOptions={{headerShown: false}}
          >
            <Tab.Screen name = {homeName} component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name = "home" size={30} style={{tintColor: focused ? Colors.white : Colors.dark}}/>
                    </View>
                  ),
            }} />

            <Tab.Screen name = {seachName} component={SearchScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name = "search" size={30} style={{tintColor: focused ? Colors.white : Colors.dark}}/>
                    </View>
                  ),
            }} />

            <Tab.Screen name = {settingName} component={SettingsScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name = "settings" size={30} style={{tintColor: focused ? Colors.white : Colors.dark}}/>
                    </View>
                  ),
            }} />
        </Tab.Navigator>
    );
}

