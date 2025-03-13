// LiveRoom

// app/components/LiveStatus.tsx
import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Seller {
  id: number;
  image: string;
  name: string;
}

interface LiveStatusProps {
  liveSellers: Seller[];
  onPressProfile: (seller: Seller) => void;
}

export default function LiveStatus({ liveSellers, onPressProfile }: LiveStatusProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {liveSellers.map((seller) => (
        <TouchableOpacity key={seller.id} onPress={() => onPressProfile(seller)}>
          <View style={styles.profileContainer}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: seller.image }} style={styles.profileImage} />
              <View style={styles.liveIndicator} />
            </View>
            <Text style={styles.profileName}>{seller.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#1c1e21',
  },
  profileContainer: {
    marginRight: 12,
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ffd33d',
  },
  liveIndicator: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FF0000', // Red dot indicating live
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});
