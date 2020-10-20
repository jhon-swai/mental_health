import axios from 'axios';
import React, { useState } from 'react'
import { View, StyleSheet , Text, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Title, Snackbar } from 'react-native-paper';

const apiUrl = 'http://example.com'
const { width, height } = Dimensions.get('screen')

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

const questions_code = 
    ["little_interest",
    "down_depressed",
    "sleep_trouble",
    "feeling_tired",
    "appetite",
    "self_pity",
    "poor_concentration",
    "sluggish",
    "suicidal_thoughts"]

const answer_options = ['not at all', 'every day', 'more than half of the days', 'nearly everyday']

export default function Diagnosis({navigation}){

    const [reply, setReply] = useState(
        {"little_interest": 0,
        "down_depressed": 0,
        "sleep_trouble": 0,
        "feeling_tired": 0,
        "appetite": 0,
        "self_pity": 0,
        "poor_concentration": 0,
        "sluggish": 0,
        "suicidal_thoughts": 0}
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

    const diagnosisResult = "Positive"

    const submitData = () => {
        // check the number of questions answered before submitting the form
        if (count > 7) {
            axios.post(apiUrl,{reply})
            .then(function(response){ console.log(response) })
            .catch(function(error){ console.log(error)})
            
            //then go to the results screen
            navigation.navigate('Results', {diagnosisResult: diagnosisResult})

        }
        else { 
            
            // show snackbar 
            showSnackbar()
        }
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Title style={styles.titleText}>PHQ-9 Diagnostic Test</Title>

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
        
        
        
        <Button mode='contained' onPress={submitData}> Submit</Button>

        <Snackbar
            visible = {visible}
            onDismiss = {onDismissSnackbar}
            actions={{
                label: 'close',
                onPress: () => { onDismissSnackbar }
            }}
            duration='3000'
        >
            <Text>Please finish the form</Text>
        </Snackbar>
        </ScrollView>
        
    )
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "ccc",
      marginLeft: 10,
      marginRight: 10,
      color: '#292a30',
    },
    
    titleText: {
        marginBottom: 15,
        alignContent: 'center',
        alignItems: 'center',
    },
    questionsContainer:{
        alignItems: "flex-start",
        color: '#fff',
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 22
    },
    buttonContainer: {
        width: width / 20,
        height: height / 25,
        backgroundColor: '#ccc',
        
    },
    questions: {
        fontSize: 22,
        marginBottom: 10 ,
        fontFamily: 'Cochin'
    }
  });