//Homepage


import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({ searchQuery, onChangeText, onCameraPress }) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Looking for something special? We've got your perfect find just a search away!"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.cameraButton} onPress={onCameraPress}>
          <Ionicons name="camera" size={24} color="#25292e" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    backgroundColor: '#97B7B2',
  },
  searchInputContainer: {
    position: 'relative',
  },
  searchInput: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingRight: 40, // leave space for the camera button
  },
  cameraButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});
