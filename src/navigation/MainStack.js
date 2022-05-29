import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";
import BottomTabNavigator from "./BottomTabNavigator";

import HomeScreen from '../screens/HomeScreen'; 
import SettingsScreen from '../screens/SettingsScreen'; 
import SearchScreen from '../screens/SearchScreen'; 

const Stack = createNativeStackNavigator(); 

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = "BottomTabNavigator" component={BottomTabNavigator}/>

        </Stack.Navigator>
    )
}

export default MainStack;