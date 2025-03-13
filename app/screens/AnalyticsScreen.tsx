// LiveRoom
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AnalyticsScreenProps {
  post: any;
  goBack: () => void;
}

export default function AnalyticsScreen({ post, goBack }: AnalyticsScreenProps) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Analytics for {post.user}</Text>
      <Text style={{ color: '#fff' }}>Views: {post.views}</Text>
      <Text style={{ color: '#fff' }}>Likes: {post.likes}</Text>
      <Text style={{ color: '#fff' }}>Comments: {post.comments}</Text>
      <Text style={{ color: '#fff' }}>Shares: {post.shares}</Text>
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
