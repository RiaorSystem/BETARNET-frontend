// app/screens/FlashSaleScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface FlashSaleItem {
  id: string;
  name: string;
  image: string;
  price: string;
}

const flashSaleItems: FlashSaleItem[] = [
  {
    id: '101',
    name: 'Earbuds Pro 6',
    image: 'https://via.placeholder.com/100/ff7f7f/000000?text=Earbuds',
    price: 'KSh 485',
  },
  {
    id: '102',
    name: 'Men Bag',
    image: 'https://via.placeholder.com/100/ffbf7f/000000?text=Bag',
    price: 'KSh 299',
  },
  {
    id: '103',
    name: 'Watch Set',
    image: 'https://via.placeholder.com/100/7fbfff/000000?text=Watch',
    price: 'KSh 559',
  },
  {
    id: '104',
    name: 'Hair Care Machine',
    image: 'https://via.placeholder.com/100/7fff7f/000000?text=Machine',
    price: 'KSh 1,999',
  },
];

export default function FlashSaleScreen() {
  // Render a flash sale item as a card
  const renderItem = ({ item }: { item: FlashSaleItem }) => (
    <TouchableOpacity style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      {/* Example "Buy" button */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flash Sale</Text>
      <FlatList
        data={flashSaleItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
      {/* Link to go back or to another page if needed */}
      <Link href="/" style={styles.backLink}>
        <Text style={styles.backLinkText}>← Back to Marketplace</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  listContent: { paddingBottom: 20 },
  itemCard: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  itemImage: { width: 100, height: 100, borderRadius: 8, resizeMode: 'cover', marginBottom: 8 },
  itemName: { color: '#fff', fontSize: 16, fontWeight: '600', marginBottom: 4 },
  itemPrice: { color: '#bbb', fontSize: 14, marginBottom: 8 },
  buyButton: {
    backgroundColor: '#1d9bf0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buyButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  backLink: { marginTop: 20, alignSelf: 'center' },
  backLinkText: { color: '#1d9bf0', fontSize: 16 },
});
