// LiveRoom

// app/screens/ARScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ARScreenProps {
  post: any;
  goBack: () => void;
}

export default function ARScreen({ post, goBack }: ARScreenProps) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>AR Preview for {post.user}</Text>
      <Text style={{ color: '#fff', marginVertical: 10 }}>
        Here you can show a 3D model or AR preview logic
      </Text>
      <TouchableOpacity onPress={goBack} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  screenTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  goBackButton: {
    backgroundColor: '#1d9bf0',
    padding: 10,
    borderRadius: 6,
    marginTop: 20,
    alignSelf: 'center',
  },
  goBackText: {
    color: '#fff',
    fontWeight: '600',
  },
});
