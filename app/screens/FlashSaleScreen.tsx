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
    image: 'https://www.gearbest.ma/wp-content/uploads/2024/05/Xiaomi-PRO-6-Wireless-Earphones-Bluetooth-Headphones-TWS-9D-Hifi-Sound-Sports-Headset-Touch-Control-Earbuds-4.webp',
    name: 'Earbuds Pro 6',
    price: 'KSh 1,485',
  },
  {
    id: '102',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShy_B3cyQmevI-VIucKdgbztxyYWvlMAZB-A&s',
    name: 'Men Bag',
    price: 'KSh 1,299',
  },
  {
    id: '103',
    image: 'https://m.media-amazon.com/images/I/51Dw1uIa5oL._AC_SY1000_.jpg',
    name: 'Faux Fur Coat for women',
    price: 'KSh 2,059',
  },
  {
    id: '104',
    image: 'https://omijewelry.com/cdn/shop/products/0E8A9463-1_223295c6-1f33-4919-91c2-df1465262e4d_480x480.jpg?v=1726580059',
    name: 'Blue Rolex and Diamond Watches',
    price: 'KSh 1,999',
  },
];

export default function FlashSaleScreen() {
  // Render a flash sale item as a card
  const renderItem = ({ item }: { item: FlashSaleItem }) => (
    <Link href={`ProductDetailFlashScreen?id=${item.id}`} asChild>
    <TouchableOpacity style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      {/* Example "Buy" button */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
    </Link>
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
