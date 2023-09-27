import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Flashcard from './components/FlashCard';
import Icon from 'react-native-vector-icons/FontAwesome';

const flashcardsData = [
  { frontText: 'Hello', backText: 'Hola' },
  { frontText: 'Goodbye', backText: 'Adiós' },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countCard,setCountCard]=useState(flashcardsData.length);
  const showNextCard = () => {
    if (currentIndex < flashcardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPreviousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const resetCard = () => {
    setCurrentIndex(0);
  };
  const Remove = () => {
    flashcardsData.splice(currentIndex,1);
    setCountCard(flashcardsData.length);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Play ({countCard}) Cards</Text>
      <Flashcard
        frontText={flashcardsData[currentIndex].frontText}
        backText={flashcardsData[currentIndex].backText}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={showPreviousCard}
          disabled={currentIndex === 0}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={showNextCard}
          disabled={currentIndex === flashcardsData.length - 1}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonBottom}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={Remove}
        >
          <Text style={styles.buttonText}>Remove From Deck </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={resetCard}
        >
          <Text style={styles.buttonText}>Reset Deck</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.IconBottom}>
        <View>
          <Icon style={styles.iconRight} name="play-circle-o" size={30} color="#E94357" />
          <Text>Play</Text>
        </View>
        <View>
          <Icon style={styles.iconLeft} name="cogs" size={30} color="#E94357" />
          <Text width={60}>Settings</Text>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    backgroundColor:"white",
    padding: 30,
    paddingLeft: 220,
    paddingRight: 220,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECE9E9',
  },
  buttonContainer: {
    width: 300,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  button: {
    width:100,
    alignItems:'center',
    
    padding: 10,
    borderRadius: 5,
    borderColor:'#E94357',
    borderWidth:1
  },
  buttonText: {
    color: '#E94357',
    fontWeight: 'bold',
  },
  buttonBottom:{
    margin:30
  },
  buttons:{
    width:300,
    alignItems:'center',
    padding:10,
    backgroundColor:"#fff",
    margin:15
  },
  IconBottom:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    borderWidth: 1,
    paddingLeft:220,
    paddingRight:220,
    padding: 10,
    gap: 160,

  },
 
});

export default App;
