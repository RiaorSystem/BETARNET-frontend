//Homepage

// app/screens/WhatsNewScreen.tsx
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface WhatsNewItem {
  id: string;
  name: string;
  image: string;
  price: string;
}

const whatsNewItems: WhatsNewItem[] = [
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

export default function WhatsNewScreen() {
  // Render a "What's New" item
  const renderItem = ({ item }: { item: WhatsNewItem }) => (
    <Link href={`ProductDetailNewScreen?id=${item.id}`} asChild>
    <TouchableOpacity style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      {/* Example "View" button */}
      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View</Text>
      </TouchableOpacity>
    </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's New</Text>
      <FlatList
        data={whatsNewItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
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
