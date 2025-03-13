// LiveRoom


import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LiveSale({ sale }) {
  const navigation = useNavigation();

  const handleTryInAR = () => {
    navigation.navigate('ARScreen', { product: sale });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: sale.image }} style={styles.backgroundImage} />

      {/* Right-side icons */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="heart" size={28} color="#fff" />
          <Text style={styles.iconText}>{sale.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="comment" size={28} color="#fff" />
          <Text style={styles.iconText}>{sale.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="share" size={28} color="#fff" />
          <Text style={styles.iconText}>{sale.shares}</Text>
        </TouchableOpacity>

        {/* AR Button */}
        <TouchableOpacity style={styles.iconButton} onPress={handleTryInAR}>
          <FontAwesome name="cube" size={28} color="#fff" />
          <Text style={styles.iconText}>AR</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom text */}
      <View style={styles.bottomContainer}>
        <Text style={styles.userName}>{sale.user}</Text>
        <Text style={styles.title}>{sale.title}</Text>
      </View>
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
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
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
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    width: '70%',
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
