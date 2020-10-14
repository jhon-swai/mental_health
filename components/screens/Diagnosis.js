import React, { useState } from 'react'
import { render } from 'react-dom';
import { View, StyleSheet , Text, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Title } from 'react-native-paper';

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

const answer_options = ['not at all', 'every day', 'more than half of the days', 'nearly everyday']
export default function Diagnosis(){

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

    // setting the interest of the patient 
    const setInterest = (value) => {
        setReply({
             ...reply, ["little_interest"]: value
        })
        console.log(reply)
    }

    // setting depressed 
    const setDepressed = (value) => {
        setReply({ ...reply, ["down_depressed"]: value })
    }
    
    // setting depressed 
    const setSleep = (value) => {
        setReply( { ...reply, ["down_depressed"]: value })
    }
    
    
    
    return (
        <ScrollView>
        <View style={styles.container}>
            <Title style={styles.titleText}>PHQ-9 Diagnostic Test</Title>

            {/*little interest*/  }
            <View style={styles.questionsContainer}>
                <Text style={styles.questions}>How often {questions[0]}</Text>
                    
                    <Button mode='text' onPress={ () => setInterest(0) }>a) {answer_options[0]}</Button>
                    <Button mode='text' onPress={ () => setInterest(1) } >b) {answer_options[1]}</Button>
                    <Button mode='text' onPress={ () => setInterest(2) }>c) {answer_options[2]}</Button>
                    <Button mode='text' onPress={ () => setInterest(3) } >d) {answer_options[3]}</Button>
            </View>

            {/*depressed */  }
            <View style={styles.questionsContainer}>
                <Text style={styles.questions}>How often {questions[1]}</Text>
                    
                    <Button mode='text' onPress={ () => setDepressed(0) }>a) {answer_options[0]}</Button>
                    <Button mode='text' onPress={ () => setDepressed(1) } >b) {answer_options[1]}</Button>
                    <Button mode='text' onPress={ () => setDepressed(2) }>c) {answer_options[2]}</Button>
                    <Button mode='text' onPress={ () => setDepressed(3) } >d) {answer_options[3]}</Button>
            </View>

            {/*Sleep trouble */  }
            <View style={styles.questionsContainer}>
                <Text style={styles.questions}>How often {questions[1]}</Text>
                    
                    <Button mode='text' onPress={ () => setSleep(0) }>a) {answer_options[0]}</Button>
                    <Button mode='text' onPress={ () => setSleep(1) } >b) {answer_options[1]}</Button>
                    <Button mode='text' onPress={ () => setSleep(2) }>c) {answer_options[2]}</Button>
                    <Button mode='text' onPress={ () => setSleep(3) } >d) {answer_options[3]}</Button>
            </View>




            
        </View>
        
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
      color: '#292a30'
    },
    titleText: {
        marginBottom: 15,
        alignContent: 'center',
        alignItems: 'center'
    },
    questionsContainer:{
        alignItems: "flex-start",
        color: '#292a30'
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
        marginBottom: 10 
    }
  });