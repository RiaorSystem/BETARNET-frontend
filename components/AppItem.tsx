// Apps 

// AppItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function AppItem({ app, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(app)}>
      <Image source={{ uri: app.icon }} style={styles.icon} />
      <Text style={styles.name}>{app.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    marginRight: 10,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginBottom: 5,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});
