import React from 'react'
import { View , Text, StyleSheet} from "react-native"
import { Button, Title } from 'react-native-paper'
import styles from '../shared/styles/style'

export default function Results({route,navigation}){
    //TODO:allow the route to take this parameter from the context
    const res = route.params.diagnosisResult
    
    return (
        <View>
            <Title style={styles.navPane}>
                <Button icon='menu' mode='text'  onPress={ ()=> navigation.toggleDrawer()  }></Button>
                <Text>Results of the test </Text>
            </Title>
            
            
            <Text>The results of the test are {res} </Text>
        </View>
    )
}

