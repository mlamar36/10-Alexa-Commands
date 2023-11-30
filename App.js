import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { useState, useEffect } from 'react';
import * as Speech from 'expo-speech';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isTtsEnabled, setIsTtsEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
 
  
  function handleButtonPress(){
    const textToSpeak = "Alexa, Tell me a joke.";
    setIsActive(!isActive);
    setIsSpeaking(true);

    if(isTtsEnabled){
      Speech.speak(textToSpeak, {
        language:'en',
        onVoice: 'onSpeaker',
        onDone: () => {
          setTimeout(() => {
            setIsSpeaking(false);
          },500); 
        },
      });
    }
  };

  function handleToggleSwitch(){
    setIsTtsEnabled(!isTtsEnabled);
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Alexa Hub: Team 10</Text>
      </View>
      <Text style={styles.font}>PRESS BUTTON TO HEAR A JOKE</Text>
      <Switch style={{ marginBottom: 20}} onValueChange={handleToggleSwitch} value={isTtsEnabled} />
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        {/* <Text style={styles.buttonText}>Tell me a Joke</Text> */}
        <Icon name="grin-squint-tears" size={150} color="#FFFFFF" />
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