import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApiFront,ApiDetails } from "../screens/index"
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack=createNativeStackNavigator()
const AppNavigator=()=>{
    return(
        <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Apifront' component={ApiFront}/>

                <Stack.Screen name='ApiDetails' component={ApiDetails}/>

            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
    )
}
export default AppNavigator