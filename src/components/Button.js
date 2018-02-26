import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    width: '100%',
    marginTop: 10,
    padding: 20,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  }
})

export { Button };