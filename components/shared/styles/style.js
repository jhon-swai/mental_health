import { StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    navPane: {
        flexDirection: 'row',
        alignSelf: "flex-start",
        padding: 5,
    },
    
    titleText: {
        
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
    // buttonContainer: {
    //     width: width / 20,
    //     height: height / 25,
    //     backgroundColor: '#ccc',
        
    // },
    questions: {
        fontSize: 22,
        marginBottom: 10 ,
        fontFamily: 'Cochin'
    },
    navButton: {
      
      alignItems: 'stretch',
      color: '#fff',
      backgroundColor: '#fff'
    },
    button: {
      alignItems:'flex-start',
      marginTop: 15, 
      marginLeft: 5,
    }
  });