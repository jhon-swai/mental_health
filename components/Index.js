import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Diagnosis from './screens/Diagnosis'
import Results from './screens/Results'

const Stack = createStackNavigator()

export default function Index(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Diagnosis"
                    component={Diagnosis}
                />

                <Stack.Screen
                    name="Results"
                    component={Results}
                />
                    
                
            </Stack.Navigator>
            
        </NavigationContainer>
        
    )
}