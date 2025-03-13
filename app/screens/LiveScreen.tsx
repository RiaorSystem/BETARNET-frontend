// Liveroom
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface LiveScreenProps {
  post: any;
  goBack: () => void;
}

export default function LiveScreen({ post, goBack }: LiveScreenProps) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Live Stream: {post.user}</Text>
      <Text style={{ color: '#fff', marginVertical: 10 }}>
        This is where you'd show the live streaming UI
      </Text>
      <TouchableOpacity onPress={goBack} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Close Live</Text>
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
