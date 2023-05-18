/* eslint-disable prettier/prettier */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
                <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: true }} />
                <Stack.Screen name="Fit" component={FitScreen } options={{ headerShown: true }} />
                <Stack.Screen name="Rest" component={RestScreen } options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

