import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MultiDecision() {
  return (
    <View style={styles.container}>
      <Text>多人决策</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 