import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";
import BottomTabNavigator from "./BottomTabNavigator";

import HomeScreen from '../screens/HomeScreen'; 
import SettingsScreen from '../screens/SettingsScreen'; 
import SearchScreen from '../screens/SearchScreen'; 
import CoinDetailsScreen from "../screens/CoinDetailsScreen";
const Stack = createNativeStackNavigator(); 

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = "BottomTabNavigator" component={BottomTabNavigator}/>
            <Stack.Screen name = "CoinDetailsScreen" component={CoinDetailsScreen} />
            <Stack.Screen name = "SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    )
}

export default MainStack;