import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";
import Login from "../screens/Login";
import MainStack from './MainStack';
const Stack = createNativeStackNavigator(); 

const Navigation = () => {
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
            <Stack.Screen name="MainStack" component={MainStack}/>
        </Stack.Navigator>
    </NavigationContainer>
}