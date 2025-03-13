// Apps 

// AppDetailsModal.js
import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function AppDetailsModal({ visible, app, onClose }) {
  if (!app) return null;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image source={{ uri: app.icon }} style={styles.icon} />
          <Text style={styles.name}>{app.name}</Text>
          {app.rating && <Text>Rating: {app.rating} ⭐</Text>}
          {app.downloads && <Text>{app.downloads}+ downloads</Text>}
          <Text style={styles.description}>{app.description || 'No description'}</Text>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    marginVertical: 10,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  closeText: {
    fontWeight: 'bold',
    color: '#333',
  },
});
