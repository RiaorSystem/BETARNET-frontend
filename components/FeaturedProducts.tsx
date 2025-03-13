//Homepage


import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function FeaturedProducts({ products }) {
  return (
    <View style={styles.featuredProductsContainer}>
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      >
      
        {products.map((product, index) => (
          <View key={index} style={styles.productItem}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
        </ScrollView>
      </View>

  );
}

const styles = StyleSheet.create({
  featuredProductsContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row', // Ensures items are arranged in a row
    paddingHorizontal: 5,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: 120,
    marginRight: 10,
  },
  productImage: {
    width: '100%',
    height: 80,
    borderRadius: 5,
  },
  productName: {
    marginTop: 5,
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
});
