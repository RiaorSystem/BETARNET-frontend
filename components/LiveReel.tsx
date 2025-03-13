//LiveRoom

// app/screens/LiveReel.tsx
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ActionButtons from '@/components/ActionButtons';

export default function LiveReel({ reel }) {
  const navigation = useNavigation();
  const [muted, setMuted] = useState(true);

  // Handler for AR preview
  const handleTryInAR = () => {
    navigation.navigate('ARScreen', { product: reel });
  };

  // Handler for Analytics ("View" button)
  const handleViewAnalytics = () => {
    navigation.navigate('AnalyticsScreen', { post: reel });
  };

  // Handler for opening the Comments screen
  const handleComment = () => {
    navigation.navigate('CommentsScreen', { post: reel });
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: reel.video }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted={muted}
      />

      <TouchableOpacity
        style={styles.muteButton}
        onPress={() => setMuted(!muted)}
      >
        <Ionicons name={muted ? 'volume-mute' : 'volume-high'} size={24} color="#fff" />
      </TouchableOpacity>

      {/* Use the ActionButtons component for the right-side actions */}
      <ActionButtons
        reel={reel}
        onPressComment={handleComment}
        onView={handleViewAnalytics}
        onPressAR={handleTryInAR}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    position: 'relative',
    marginBottom: 20,
    backgroundColor: '#000',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  muteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 20,
  },
});
