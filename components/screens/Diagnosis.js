import axios from 'axios';
import React, { useState } from 'react'
import { View, StyleSheet , Text, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Title, Snackbar } from 'react-native-paper';
import styles from '../shared/styles/style'

const apiUrl =  'https://mental-health-status.herokuapp.com/diagnose'

const questions = [
    'do you have little interest in doing things?', 
    'are you feeling down, depressed, or hopeless?', 
    'trouble falling or staying asleep, or sleeping too much?', 
    'feeling tired or having little energy?', 
    'do you have poor appetite or overeating?', 
    'are you feeling bad about yourself — or that you are a failure or have let yourself or your family down?', 
    'do you have trouble concentrating on things, such as reading the newspaper or watching television?', 
    ' are you moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?', 
    'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?']

// const questions_code_actual = 
//     ["little_interest",
//     "down_depressed",
//     "sleep_trouble",
//     "feeling_tired",
//     "appetite",
//     "self_pity",
//     "poor_concentration",
//     "sluggish",
//     "suicidal_thoughts"]
const questions_code = [
    'q1','q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9'
]

const answer_options = ['not at all', 'every day', 'more than half of the days', 'nearly everyday']

export default function Diagnosis({navigation}){

    // const [reply, setReply] = useState(
    //     {"little_interest": 0,
    //     "down_depressed": 0,
    //     "sleep_trouble": 0,
    //     "feeling_tired": 0,
    //     "appetite": 0,
    //     "self_pity": 0,
    //     "poor_concentration": 0,
    //     "sluggish": 0,
    //     "suicidal_thoughts": 0}
    // )
    const [reply, setReply] = useState(   
        {
        "q1": 0,
        "q2": 0,
        "q3": 0,
        "q4": 0,
        "q5": 0,
        "q6": 0,
        "q7": 0,
        "q8": 0,
        "q9": 0}
    )
 
    const [visible, setVisible] = useState(false)

    const showSnackbar = () => setVisible(true)
    const onDismissSnackbar = () => setVisible(false)

    // track the number of questions answered 
    const [count, setCount] = useState(0)

    const increment = () => { setCount(count + 1) }
    
    const setValue = (qn_code, value) =>{
        increment()
        setReply({ ...reply, [questions_code[qn_code]]: value})
        
        console.log(reply)
    }

    let depression_scale = ["no depression", "mild depression", "moderate depression", "moderately severe depression", "severe depression"]

    const [results, setResults] = useState("waiting...")
    const submitReply = (status) =>{
        setResults(depression_scale[status])
    }


    const submitData = () => {
        //TODO:try using axios
        // check the number of questions answered before submitting the form
        // if (count > 7) {
        //     axios.post(apiUrl,{reply})
        //     .then(
        //         // axios.get(apiUrl,{reply}).then(function(response){ console.log(response); setResults(response) })
        //         (response) => { console.log(response); setResults(response) }
        //     )
        //     .catch((error)=>{ console.log(error)})
            
            
      //     //then go to the results screen
        //     navigation.navigate('Results', {diagnosisResult: results})

        // }
        if (count > 5){
                                
            fetch(apiUrl, {
                method: 'POST',
                headers: new Headers(
                    {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',                          
                    }),
                body: JSON.stringify( reply )
                }
            )        
            .then( (response)=> response.json() )
            .then( (json) => { 
                 submitReply( json.status )
                 navigation.navigate('Results', {diagnosisResult: results}    )      
            })
            .catch( 
                (error)=>{ console.log("The app failed"); 
                console.log(error) 
            })
            .finally( console.log("done") )     
        }
        else { 
            
            // show snackbar when the questions answered are fewer than expected
            showSnackbar()
        }
    }

    return (
        
            <ScrollView>
            
            
            <View style={styles.container}>
                
            <Title style={styles.navPane}>
                <Button icon='menu' mode='text'  onPress={ ()=> navigation.toggleDrawer()  }></Button>
                <Text>PHQ-9 Diagnostic Test </Text>
            </Title>

                {/*little interest*/  }
                <View style={styles.questionsContainer}>
                    <Text style={styles.questions}>How often {questions[0]}</Text>
                        
                        <Button mode='text' onPress={ () => setValue(0,1) }>a) {answer_options[0]}</Button>
                        <Button mode='text' onPress={ () => setValue(0,1) } >b) {answer_options[1]}</Button>
                        <Button mode='text' onPress={ () => setValue(0,2) }>c) {answer_options[2]}</Button>
                        <Button mode='text' onPress={ () => setValue(0,3) } >d) {answer_options[3]}</Button>
                </View>

                {/*depressed */  }
                <View style={styles.questionsContainer}>
                    <Text style={styles.questions}>How often {questions[1]}</Text>
                        
                        <Button mode='text' onPress={ () =>setValue(1,0) }>a) {answer_options[0]}</Button>
                        <Button mode='text' onPress={ () =>setValue(1,1) } >b) {answer_options[1]}</Button>
                        <Button mode='text' onPress={ () =>setValue(1,2) }>c) {answer_options[2]}</Button>
                        <Button mode='text' onPress={ () =>setValue(1,3) } >d) {answer_options[3]}</Button>
                </View>

                {/*Sleep trouble */  }
                <View style={styles.questionsContainer}>
                    <Text style={styles.questions}>How often {questions[2]}</Text>
        
                        <Button mode='text' onPress={ () => setValue(2,0) }>a) {answer_options[0]}</Button>
                        <Button mode='text' onPress={ () => setValue(2,1) } >b) {answer_options[1]}</Button>
                        <Button mode='text' onPress={ () => setValue(2,2) }>c) {answer_options[2]}</Button>
                        <Button mode='text' onPress={ () => setValue(2,3) } >d) {answer_options[3]}</Button>
                </View>

                {/*feeling tired  */  }
                <View style={styles.questionsContainer}>
                    <Text style={styles.questions}>How often {questions[3]}</Text>
        
                        <Button mode='text' onPress={ () => setValue(3, 0) }>a) {answer_options[0]}</Button>
                        <Button mode='text' onPress={ () => setValue(3, 1) } >b) {answer_options[1]}</Button>
                        <Button mode='text' onPress={ () => setValue(3, 2) }>c) {answer_options[2]}</Button>
                        <Button mode='text' onPress={ () => setValue(3, 3) } >d) {answer_options[3]}</Button>
                </View>

                {/*Appetite */  }
                <View style={styles.questionsContainer}>
                    <Text style={styles.questions}>How often {questions[4]}</Text>
        
                        <Button mode='text' onPress={ () => setValue(4, 0) }>a) {answer_options[0]}</Button>
                        <Button mode='text' onPress={ () => setValue(4, 1) } >b) {answer_options[1]}</Button>
                        <Button mode='text' onPress={ () => setValue(4, 2) }>c) {answer_options[2]}</Button>
                        <Button mode='text' onPress={ () => setValue(4, 3) } >d) {answer_options[3]}</Button>
                </View>

                {/*self pity */  }
                <View style={styles.questionsContainer}>
                    <Text style={styles.questions}>How often {questions[5]}</Text>
        
                        <Button mode='text' onPress={ () => setValue(5, 0) }>a) {answer_options[0]}</Button>
                        <Button mode='text' onPress={ () => setValue(5, 1) } >b) {answer_options[1]}</Button>
                        <Button mode='text' onPress={ () => setValue(5, 2) }>c) {answer_options[2]}</Button>
                        <Button mode='text' onPress={ () => setValue(5, 3) } >d) {answer_options[3]}</Button>
                </View>

                {/*poor concentration */  }
                <View style={styles.questionsContainer}>
                    <Text style={styles.questions}>How often {questions[6]}</Text>
        
                        <Button mode='text' onPress={ () => setValue(6, 0) }>a) {answer_options[0]}</Button>
                        <Button mode='text' onPress={ () => setValue(6, 1) } >b) {answer_options[1]}</Button>
                        <Button mode='text' onPress={ () => setValue(6, 2) }>c) {answer_options[2]}</Button>
                        <Button mode='text' onPress={ () => setValue(6, 3) } >d) {answer_options[3]}</Button>
                </View>

                {/*sluggish  */  }
                <View style={styles.questionsContainer}>
                    <Text style={styles.questions}>How often {questions[7]}</Text>
        
                        <Button mode='text' onPress={ () => setValue(7, 0) }>a) {answer_options[0]}</Button>
                        <Button mode='text' onPress={ () => setValue(7, 1) } >b) {answer_options[1]}</Button>
                        <Button mode='text' onPress={ () => setValue(7, 2) }>c) {answer_options[2]}</Button>
                        <Button mode='text' onPress={ () => setValue(7, 3) } >d) {answer_options[3]}</Button>
                </View>

                {/*suicidal thoughts  */  }
                <View style={styles.questionsContainer}>
                    <Text style={styles.questions}>How often {questions[8]}</Text>
        
                        <Button mode='text' onPress={ () => setValue(8, 0) }>a) {answer_options[0]}</Button>
                        <Button mode='text' onPress={ () => setValue(8, 1) } >b) {answer_options[1]}</Button>
                        <Button mode='text' onPress={ () => setValue(8, 2) }>c) {answer_options[2]}</Button>
                        <Button mode='text' onPress={ () => setValue(8, 3) } >d) {answer_options[3]}</Button>
                </View> 
                        
            </View>
            
            
            
            <Button mode='contained' onPress={ submitData }> Submit </Button>

            <Snackbar
                visible = {visible}
                onDismiss = {onDismissSnackbar}
                actions={{
                    label: 'close',
                    onPress: () => { onDismissSnackbar }
                }}
                duration='300'
            >
                <Text>Please finish the form</Text>
            </Snackbar>
            </ScrollView>
      
        
        
    )
    
}
