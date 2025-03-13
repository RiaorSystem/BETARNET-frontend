// Liveroom
// app/screens/CommentsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface CommentsScreenProps {
  post: any;
  goBack: () => void;
}

export default function CommentsScreen({ post, goBack }: CommentsScreenProps) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Comments for {post.user}</Text>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.commentText}>No comments yet. (This is a placeholder.)</Text>
      </ScrollView>
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
  commentText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  goBackButton: {
    backgroundColor: '#1d9bf0',
    padding: 10,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 20,
  },
  goBackText: {
    color: '#fff',
    fontWeight: '600',
  },
});
