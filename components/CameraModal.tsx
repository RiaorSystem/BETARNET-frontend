// Homepage


import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function LocationSearch({ locationQuery, onChangeText, onSearchPress }) {
  return (
    <View style={styles.locationSearchContainer}>
      <TextInput
        style={styles.locationInput}
        placeholder="Enter location (e.g., Kenya)"
        placeholderTextColor="#999"
        value={locationQuery}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.locationSearchButton} onPress={onSearchPress}>
        <Text style={styles.locationSearchButtonText}>Search Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  locationSearchContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  locationInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 10,
  },
  locationSearchButton: {
    padding: 10,
    backgroundColor: '#97B7B2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationSearchButtonText: {
    color: '#25292e',
    fontWeight: 'bold',
  },
});
