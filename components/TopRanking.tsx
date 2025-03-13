import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function TopRanking({ topranking = [] }) {
  console.log('TopRanking data:', topranking);

  return (
    <View style={styles.TopRankingContainer}>
      <Text style={styles.sectionTitle}>Top Ranking</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {topranking.map((item, index) => {
          console.log(`Item ${index} image URL:`, item.image);
          return (
            <View key={index} style={styles.toprankingItem}>
              <Image 
                source={{ uri: item.image || 'https://via.placeholder.com/150' }} 
                style={styles.toprankingImage} 
              />
              <Text style={styles.toprankingName}>{item.name}</Text>
              <Text style={styles.toprankingPrice}>{item.price}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TopRankingContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  toprankingItem: {
    width: 150,
    marginRight: 10,
  },
  toprankingImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  toprankingName: {
    marginTop: 5,
    fontSize: 16,
  },
  toprankingPrice: {
    fontSize: 14,
    color: '#666',
  },
});
