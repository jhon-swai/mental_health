import React from 'react'
import { View , Text} from "react-native"

export default function Results({route, navigation}){
    const res = route.params.diagnosisResult
    return (
        <View>
            <Text>The results of the test are {res} </Text>
        </View>
    )
}