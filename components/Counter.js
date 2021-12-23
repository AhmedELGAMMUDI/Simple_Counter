import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
      <Button
        onPress={() => setCounter(counter + 1)}
        title="Increase"
        style={styles.button}
        accessibilityLabel="Increase Counter"
      />
      <Button
        onPress={() => setCounter(counter - 1)}
        title="Decrease"
        style={styles.button}
        accessibilityLabel="Decrease Counter"
      />
      <Button
        onPress={() => setCounter(0)}
        title="Reset"
        style={styles.button}
        accessibilityLabel="Rest Counter"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  button: {
    color:"#316be9"
  },
  buttonContainer:{
    flex:1,
    flexDirection: "row"
  }
});
export default Counter;
