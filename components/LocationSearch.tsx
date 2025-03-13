//Homepage



import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LocationPicker({
  placeholder = "Tell us where, and we'll find it for you!",
  initialLocation = '',
  locationList = [],
  onLocationSelect,
}) {
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState(initialLocation);

  // When user presses a location from the list
  const handleSelectLocation = (loc) => {
    setSearchText(loc);
    onLocationSelect(loc);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Row with icon & text */}
      <TouchableOpacity style={styles.locationRow} onPress={() => setVisible(true)}>
        <Ionicons name="location-outline" size={20} color="#25292e" style={{ marginRight: 5 }} />
        <Text style={styles.locationText}>
          {searchText ? searchText : placeholder}
        </Text>
      </TouchableOpacity>

      {/* Modal for selecting/typing location */}
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose Your Location</Text>

            {/* Text Input for typing a new location */}
            <TextInput
              style={styles.locationInput}
              placeholder="Type a location..."
              value={searchText}
              onChangeText={setSearchText}
            />

            {/* List of preset locations */}
            <FlatList
              data={locationList}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.locationItem}
                  onPress={() => handleSelectLocation(item)}
                >
                  <Text style={styles.locationItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            {/* Confirm button */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                onLocationSelect(searchText);
                setVisible(false);
              }}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>

            {/* Cancel button */}
            <TouchableOpacity style={styles.cancelButton} onPress={() => setVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#25292e',
    fontSize: 14,
    fontWeight: 'bold',
  },
  /* Modal styles */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  locationItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  locationItemText: {
    fontSize: 14,
    color: '#25292e',
  },
  confirmButton: {
    backgroundColor: '#97B7B2',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: '#25292e',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelButtonText: {
    color: '#25292e',
    fontWeight: 'bold',
  },
});
