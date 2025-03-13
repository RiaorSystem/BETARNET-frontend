import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

type CartItem = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
};

type ViewedItem = {
  id: string;
  name: string;
  image: string;
  price: string;
};

export default function CartScreen() {
  const router = useRouter();

  const [cartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Nova Cutlery Set',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t_CVW9zgdniFU8M4DER3AkAuJ6Z1wZWWXA&s',
      description: 'Discount 20% - With as low as KSH 1000',
      price: 'Ksh 18,699',
    },
    {
      id: '2',
      name: 'Sony A6400 Mirrorless Camera',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhYfn-ymddyR0vX0EYDNk9S9iQTkVcG44Rg&s',
      description: 'With 18-135mm Lens',
      price: 'Ksh 85,000',
    },
  ]);

  const [recentlyViewed] = useState<ViewedItem[]>([
    {
      id: '1',
      name: 'Nova Cutlery Set',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t_CVW9zgdniFU8M4DER3AkAuJ6Z1wZWWXA&s',
      price: 'Ksh 1,000',
    },
    {
      id: '2',
      name: 'Smart Headphone',
      image: 'https://chekistore.com/public/uploaded/2024/Mar/KXIQGgKX3AG9YalXQwsGZDgAsatBvmXT018eZcmJ.webp',
      price: 'Ksh 2,500',
    },
    {
      id: '3',
      name: 'Interior Decor',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXBaO3zPaaHvOo4dWAKL6yuumfaP4Jgn_3g&s',
      price: 'Ksh 3,500',
    },
  ]);

  const goToCartItem = (itemId: string) => {
    // Navigates to the dynamic route for the selected cart item.
    router.push(`/profile/CartScreen/${itemId}`);

  };

  return (
    <ScrollView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Cart Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>CART SUMMARY</Text>
        <Text style={styles.subtotalText}>Subtotal</Text>
        <Text style={styles.subtotalPrice}>Ksh 18,699</Text>
        <Text style={styles.deliveryNote}>Delivery fees not included yet.</Text>
        <View style={styles.pinkEllipse} />
      </View>

      {/* My Cart */}
      <Text style={styles.sectionTitle}>My Cart</Text>
      {cartItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => goToCartItem(item.id)}
          style={styles.cartItemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.cartItemImage} />
          <View style={styles.cartItemDetails}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemDesc}>{item.description}</Text>
            <Text style={styles.cartItemPrice}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Recently Viewed */}
      <Text style={styles.sectionTitle}>Recently Viewed</Text>
      <FlatList
        data={recentlyViewed}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.viewedItemContainer}>
            <Image source={{ uri: item.image }} style={styles.viewedItemImage} />
            <Text style={styles.viewedItemName}>{item.name}</Text>
            <Text style={styles.viewedItemPrice}>{item.price}</Text>
          </View>
        )}
      />

      {/* Extra bottom space */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /* Header */
  header: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 12,
  },
  /* Cart Summary */
  summaryContainer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 16,
    paddingHorizontal: 12,
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
    position: 'relative',
  },
  summaryTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
  },
  subtotalText: {
    fontSize: 14,
    color: '#666',
  },
  subtotalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  deliveryNote: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  pinkEllipse: {
    width: 100,
    height: 40,
    backgroundColor: '#ff99aa',
    borderRadius: 20,
    position: 'absolute',
    top: 20,
    right: 20,
    opacity: 0.6,
  },
  /* My Cart & Items */
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 12,
    marginBottom: 6,
  },
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 8,
    padding: 8,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cartItemDetails: {
    justifyContent: 'center',
    flex: 1,
  },
  cartItemName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  cartItemDesc: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  cartItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  /* Recently Viewed */
  viewedItemContainer: {
    width: width * 0.4,
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    marginRight: 8,
    marginLeft: 8,
    padding: 8,
    alignItems: 'center',
  },
  viewedItemImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginBottom: 6,
    resizeMode: 'cover',
  },
  viewedItemName: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  viewedItemPrice: {
    fontSize: 12,
    color: '#666',
  },
});
