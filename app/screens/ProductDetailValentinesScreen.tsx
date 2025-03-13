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
    id: '201',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8dapbArY38bOIgPBP-HuAq_FOxlV7hpjVg&s',
    name: 'Chocolate Box',
    price: 'KSh 4,999',
  },
  {
    id: '202',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBTqNfqifTx4hw_nM4hXFzpORqOE5jmUF7g&s',
    name: 'Roses Bouquet',
    price: 'KSh 1,500',
  },
  {
    id: '203',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45A_P4GIR_LyZbBJ6gBL4k3NjQWC6aCuwk_duUV9UxUBsk2zlJ6YXLqxpDjkR99_PrVg&usqp=CAU',
    name: 'Teddy bear Package',
    price: 'KSh 1,559',
  },
  {
    id: '204',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbubrzOC95pj5L_AlQEGwwxTqhARrVwXR4SA&s',
    name: 'Valentine cake house',
    price: 'KSh 1,999',
  },
];

export default function ProductDetailnewScreen() {
  const { id } = useLocalSearchParams(); // extract query parameters
  const router = useRouter();

  // Find the product with the matching id.
  const product = sampleProducts.find((p) => p.id === id) || sampleProducts[0];

  return (
    <ScrollView style={styles.container}>
      <Link href="ValentinesScreen" style={styles.backLink}>
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
