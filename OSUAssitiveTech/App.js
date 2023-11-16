import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  
  function handleButtonPress(){
    //currently changes the value of isActive between green and scarlet
    //the goal is to have it handle when a button is pressed and send it to
    //the alexa
    // const textToSpeak = isActive ? "Power Off" : "Power On";
    // if(Platform.OS === 'android'){
    //   alert("android");
    // } else if (Platform.OS === 'ios'){
    //   alert('ios');
    // }

    setIsActive(!isActive);

    Speech.speak(textToSpeak, {
      language:'en',
      onVoice: 'onSpeaker',
    })
  };

  

  const buttonColor = isActive ? 'green' : '#BB0000';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Alexa Hub: Team 10</Text>
        {/* <FontAwesome name="edit" size={15} color="white" >Alexa Hub: Team 10</FontAwesome> */}
      </View>
      <Text style={styles.font}>PRESS BUTTON TO SEE IF WE CAN CONNECT</Text>
      <TouchableOpacity onPress={handleButtonPress} style={[styles.button, {backgroundColor: buttonColor}]}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666666",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    height: 250,
    width: 250,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'center',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  font: {
    color: "#FFFFFF",
    marginBottom: 50,
  },
  header: {
    alignItems: 'center',
    width: '100%',
    height: "15%",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#BB0000",
    justifyContent: 'center',
  },
  headerText:{
    fontSize:28,
    color: 'white',
  },
});