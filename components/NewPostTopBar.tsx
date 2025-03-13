// ARSCore

// app/components/NewPostTopBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NewPostTopBar({ onClose, onNext }) {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={onClose}>
        <Ionicons name="close" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>New Post</Text>
      <TouchableOpacity onPress={onNext}>
        <Text style={styles.nextButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  nextButton: {
    fontSize: 16,
    color: '#fff',
  },
});
