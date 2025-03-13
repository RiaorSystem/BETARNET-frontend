

//Profile page
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Post {
  id: number;
  image: string;
  caption: string;
  likes: number;
}

interface PostItemProps {
  post: Post;
  onLike: (postId: number) => void;
  onComment: (postId: number) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onLike, onComment }) => {
  return (
    <View style={styles.galleryItem}>
      <Image source={{ uri: post.image }} style={styles.galleryImage} />
      <View style={styles.postInfo}>
        <Text style={styles.postCaption}>{post.caption}</Text>
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionIcon} onPress={() => onLike(post.id)}>
            <Ionicons name="heart-outline" size={16} color="red" />
            <Text style={styles.likesText}>{post.likes} likes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon} onPress={() => onComment(post.id)}>
            <Ionicons name="chatbubble-outline" size={16} color="#25292e" />
            <Text style={styles.commentText}>Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  galleryItem: {
    width: '60%',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  galleryImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  postInfo: {
    padding: 6,
  },
  postCaption: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default PostItem;
