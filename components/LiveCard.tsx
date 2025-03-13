// LiveRoom
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface LiveCardProps {
  post: any;
  onView?: (post: any) => void;
  onPressLive?: (post: any) => void;
  children?: React.ReactNode;
}

export default function LiveCard({
  post,
  onView,
  onPressLive,
  children,
}: LiveCardProps) {
  return (
    <View style={styles.cardContainer}>
      {/* If it's a live post, show a placeholder. Otherwise, show the child component. */}
      {post.type === 'live' ? (
        <TouchableOpacity
          onPress={() => onPressLive && onPressLive(post)}
          style={styles.livePlaceholder}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            LIVE by {post.user}
          </Text>
        </TouchableOpacity>
      ) : (
        children
      )}

      {/* Single "View" button for analytics */}
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onView && onView(post)}
        >
          <Text style={styles.actionText}>👁 {post.views}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#333',
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
  },
  livePlaceholder: {
    height: 200,
    backgroundColor: 'red',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'flex-start', // only one button, so align left
  },
  actionButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginRight: 10,
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
  },
});
