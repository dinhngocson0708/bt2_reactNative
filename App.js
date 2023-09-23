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

  return (
    <View style={styles.container}>
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
          onPress={resetCard}
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
        <Icon name="play-circle-o" size={20} color="#E94357" />
        <Icon name="cogs" size={20} color="#E94357" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    backgroundColor: 'white', // Đặt màu nền của nút ở đây
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
    borderColor:'lightgray',
    borderWidth:1,
    margin:10
  },
  IconBottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:300
  }
});

export default App;
