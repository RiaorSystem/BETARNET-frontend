//Homepage

// app/screens/WhatsNewScreen.tsx
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface ValentinesItem {
  id: string;
  name: string;
  image: string;
  price: string;
}

const valentinesItems: ValentinesItem[] = [
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

export default function ValentinesScreen() {
  // Render a "What's New" item
  const renderItem = ({ item }: { item: ValentinesItem }) => (
    <TouchableOpacity style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      {/* Example "View" button */}
      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valentines Offer</Text>
      <FlatList
        data={valentinesItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
      <Link href="ProductDetailValentinesScreen" style={styles.backLink}>
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
  viewButton: {
    backgroundColor: '#1d9bf0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  viewButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  backLink: { marginTop: 20, alignSelf: 'center' },
  backLinkText: { color: '#1d9bf0', fontSize: 16 },
});
