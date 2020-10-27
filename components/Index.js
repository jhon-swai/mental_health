import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ResponseProvider from './navigation/ResponseProvider';


import { createDrawerNavigator, DrawerContentScrollView,  } from '@react-navigation/drawer';


import Diagnosis from './screens/Diagnosis'
import Results from './screens/Results'
import Treatment from './screens/Treatment'



const Drawer = createDrawerNavigator()

export default function Index(){
    const [results, setResults ] = useState()
    return (
        
            <NavigationContainer>

                    <Drawer.Navigator>
                    {/*TODO: it is possible to insert the navigation here. Look into that!!*/}
                    <Drawer.Screen
                        name="Diagnosis"
                        component={Diagnosis}
                    />

                    <Drawer.Screen
                        name="Results"
                        component={Results}
                    />
                    <Drawer.Screen
                        name="Treatment"
                        component={Treatment}
                    /> 
                </Drawer.Navigator>
                
            </NavigationContainer>
          
    )
}