import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Title } from 'react-native-paper'


export default function Treatment({navigation}){
    const CBT_content = [
        "What is CBT",
        "Cognitive behavioral therapy (CBT) is a form of psychotherapy that focuses on modifying dysfunctional emotions, behaviors, and thoughts by interrogating and uprooting negative or irrational beliefs.", 
        "CBT helps you become aware of inaccurate or negative thinking so you can view challenging situations more clearly and respond to them in a more effective way.",
        "Why CBT",
        "Cognitive behavioral therapy is used to treat a wide range of issues. It's often the preferred type of psychotherapy because it can quickly help you identify and cope with specific challenges.", 
        "It generally requires fewer sessions than other types of therapy and is done in a structured way.",
        "CBT can be a very helpful tool ― either alone or in combination with other therapies ― in treating mental health disorders, such as depression, post-traumatic stress disorder (PTSD), or an eating disorder.",
        "But not everyone who benefits from CBT has a mental health condition. CBT can be an effective tool to help anyone learn how to better manage stressful life situations.",
        "How it works",
        "Considered a 'solutions-oriented' form of talk therapy, CBT rests on the idea that thoughts and perceptions influence behavior.",
        "Feeling distressed, in some cases, may distort one’s perception of reality. CBT aims to identify harmful thoughts, assess whether they are an accurate depiction of reality, and, if they are not, employ strategies to challenge and overcome them.",

    ]
    return (
        <ScrollView>
            <View style={styles.container}>
                <Title style={styles.navPane}>
                    <Button icon='menu' mode='text'  onPress={ ()=> navigation.toggleDrawer()  }></Button>
                    <Text>Results of the test </Text>
                </Title>
                {/*what is CBT*/ }
                <Text style={styles.heading}>{CBT_content[0]}</Text>
                <Text style={styles.baseText}>{CBT_content[1]}</Text> 
                <Text style={styles.baseText}>{CBT_content[2]}</Text> 

                {/* why cbt */} 
                <Text style={styles.heading}>{CBT_content[3]}</Text>
                <Text style={styles.baseText}>{CBT_content[4]}</Text> 
                <Text style={styles.baseText}>{CBT_content[5]}</Text> 
                <Text style={styles.baseText}>{CBT_content[6]}</Text>
                <Text style={styles.baseText}>{CBT_content[7]}</Text>  

                {/* How it works */}
                <Text style={styles.heading}>{CBT_content[8]}</Text>
                <Text style={styles.baseText}>{CBT_content[9]}</Text> 
                <Text style={styles.baseText}>{CBT_content[10]}</Text> 
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        
        backgroundColor: "ccc",
        marginLeft: 10,
        marginRight: 10,
        color: '#292a30',
        padding: 10,
        
    },
    titleText: {
        
        alignSelf: "stretch",
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#ccc'
    },
    heading: {
        fontSize: 22,
        marginBottom: 10,
        fontWeight: 'bold'
        
    },
    baseText: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        marginBottom: 10,
    }
})