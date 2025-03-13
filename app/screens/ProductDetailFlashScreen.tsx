// app/screens/ProductDetailScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Link, useRouter } from 'expo-router';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description?: string;
}

// For now, we'll use static sample data.
// In a real app, you could fetch product details based on the id.
const sampleProducts: Product[] = [
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

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams(); // extract query parameters
  const router = useRouter();

  // Find the product with the matching id.
  const product = sampleProducts.find((p) => p.id === id) || sampleProducts[0];

  return (
    <ScrollView style={styles.container}>
      <Link href="screens/FlashSaleScreen" style={styles.backLink}>
        <Text style={styles.backLinkText}>← Back to Marketplace</Text>
      </Link>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      {/* You can add additional details, buttons, etc. */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16 },
  backLink: { marginBottom: 10 },
  backLinkText: { color: '#1d9bf0', fontSize: 16 },
  productImage: { width: '100%', height: 200, borderRadius: 8, resizeMode: 'cover', marginBottom: 12 },
  productName: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 6 },
  productPrice: { color: '#bbb', fontSize: 20, marginBottom: 12 },
  productDescription: { color: '#fff', fontSize: 16 },
});
