// components/Flashcard.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Flashcard = ({ frontText, backText }) => {
  const [isFront, setIsFront] = useState(true);

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  return (
    <TouchableOpacity onPress={toggleCard}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{isFront ? frontText : backText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E94357',
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'lightgray',
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color:'white'
  },
});

export default Flashcard;
