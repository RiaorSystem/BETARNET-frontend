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
    id: '301',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOL0w96g269kvz8ac2zDIEPRH0iCRYlL1_Q&s',
    name: 'Smart Gadget',
    price: 'KSh 3,999',
  },
  {
    id: '302',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVe25YWagB65FUVynDXiaSuRelcglK9vcbPA&s',
    name: 'Running Shoes',
    price: 'KSh 2,500',
  },
  {
    id: '303',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFG-i5TPOXNWZxz8jBueOQ-ISkauptmUSaw&s',
    name: 'Watch Set',
    price: 'KSh 1,559',
  },
  {
    id: '304',
    image: 'https://www.lecouleurpro.com/wp-content/uploads/2018/10/nano-mist-1.png',
    name: 'Hair Care Machine',
    price: 'KSh 10,999',
  },
];

export default function ProductDetailnewScreen() {
  const { id } = useLocalSearchParams(); // extract query parameters
  const router = useRouter();

  // Find the product with the matching id.
  const product = sampleProducts.find((p) => p.id === id) || sampleProducts[0];

  return (
    <ScrollView style={styles.container}>
      <Link href="screens/WhatsNewScreen" style={styles.backLink}>
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
