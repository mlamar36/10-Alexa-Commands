import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import * as Speech from 'expo-speech';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  
  function handleButtonPress(){
    const textToSpeak = "Alexa, Tell me a joke.";
    setIsActive(!isActive);
    setIsSpeaking(true);

    Speech.speak(textToSpeak, {
      language:'en',
      onVoice: 'onSpeaker',
      onDone: () => {
        setTimeout(() => {
          setIsSpeaking(false);
        },500); 
      },
    });
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Alexa Hub: Team 10</Text>
      </View>
      <Text style={styles.font}>PRESS BUTTON TO HEAR A JOKE</Text>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Tell me a Joke</Text>
        {/* <Icon name="face-grin-tears" size={30} color="#900" /> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-face-grin-tears" /> */}
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
    backgroundColor: '#BB0000',
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