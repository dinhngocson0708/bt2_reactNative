// components/Flashcard.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Flashcard = ({ frontText, backText,bollen}) => {
  const [isFront, setIsFront] = useState(bollen);

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
    marginTop: 20,
    width:400,
    height:400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  cardText: {
    fontSize: 50,
    textAlign: 'center',
    color:'white'
  },
});

export default Flashcard;
