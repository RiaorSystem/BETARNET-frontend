

//Profile page
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Reel {
  id: number;
  videoUrl: string;
  caption: string;
  likes: number;
}

interface ReelItemProps {
  reel: Reel;
  onLike: (reelId: number) => void;
  onComment: (reelId: number) => void;
}

const ReelItem: React.FC<ReelItemProps> = ({ reel, onLike, onComment }) => {
  return (
    <View style={styles.reelItem}>
      <Ionicons name="videocam-outline" size={40} color="#25292e" />
      <Text style={styles.reelCaption}>{reel.caption}</Text>
      <View style={styles.reelActions}>
        <TouchableOpacity style={styles.actionIcon} onPress={() => onLike(reel.id)}>
          <Ionicons name="heart-outline" size={16} color="red" />
          <Text style={styles.likesText}>{reel.likes} likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIcon} onPress={() => onComment(reel.id)}>
          <Ionicons name="chatbubble-outline" size={16} color="#25292e" />
          <Text style={styles.commentText}>Comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reelItem: {
    width: '90%',
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reelCaption: {
    marginTop: 10,
    fontSize: 14,
    color: '#25292e',
  },
  reelActions: {
    flexDirection: 'row',
    marginTop: 6,
  },
  actionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  likesText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#333',
  },
  commentText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#333',
  },
});

export default ReelItem;
