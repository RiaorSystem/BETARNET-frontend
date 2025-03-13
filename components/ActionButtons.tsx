// LiveRoom
// app/components/ActionButtons.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ActionButtonsProps {
  reel: {
    id: number;
    likes: number;
    comments: number;
    shares: number;
    views: number;
  };
  onPressComment: (reel: any) => void;
  onView: (reel: any) => void;
  onPressAR: (reel: any) => void;
}

export default function ActionButtons({
  reel,
  onPressComment,
  onView,
  onPressAR,
}: ActionButtonsProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(reel.likes);
  const [commentsCount, setCommentsCount] = useState(reel.comments);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount(likesCount + 1);
    }
    // Optionally, allow unliking here if desired.
  };

  const handleComment = () => {
    // Increase comment count (for demo)
    setCommentsCount(commentsCount + 1);
    onPressComment(reel);
  };

  return (
    <View style={styles.rightIcons}>
      {/* Like Button */}
      <TouchableOpacity style={styles.iconButton} onPress={handleLike}>
        <FontAwesome name="heart" size={28} color={liked ? "#00008B" : "#fff"} />
        <Text style={styles.iconText}>{likesCount}</Text>
      </TouchableOpacity>

      {/* Comment Button */}
      <TouchableOpacity style={styles.iconButton} onPress={handleComment}>
        <FontAwesome name="comment" size={28} color="#fff" />
        <Text style={styles.iconText}>{commentsCount}</Text>
      </TouchableOpacity>

      {/* Share Button */}
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="share" size={28} color="#fff" />
        <Text style={styles.iconText}>{reel.shares}</Text>
      </TouchableOpacity>

      {/* AR Button */}
      <TouchableOpacity style={styles.iconButton} onPress={() => onPressAR(reel)}>
        <FontAwesome name="cube" size={28} color="#fff" />
        <Text style={styles.iconText}>AR</Text>
      </TouchableOpacity>

      {/* View Button */}
      <TouchableOpacity style={styles.iconButton} onPress={() => onView(reel)}>
        <FontAwesome name="eye" size={28} color="#fff" />
        <Text style={styles.iconText}>{reel.views}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rightIcons: {
    position: 'absolute',
    right: 10,
    bottom: 100,
    alignItems: 'center',
  },
  iconButton: {
    marginBottom: 20,
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 14,
  },
});
