import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Create from "../Pages/Create";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Login" 
                component={Login}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Create"
                component={Create}
                options={{headerShown: false}}
            />
        </Stack.Navigator>


    )
}