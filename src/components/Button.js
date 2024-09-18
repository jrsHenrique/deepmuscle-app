import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Button;
