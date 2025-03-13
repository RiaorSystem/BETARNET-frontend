// app/screens/WishlistScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

// Sample data
type WishlistItem = {
  id: string;
  brand: string;
  name: string;
  description: string;
  rating: number;
  image: string;
  brandColor: string; // color label for brand
};

const wishlistData: WishlistItem[] = [
  {
    id: '1',
    brand: 'Microsoft',
    name: 'Surface Laptop 4',
    description:
      'Intel Core i5 1135G7 16GB RAM 512GB SSD 13.5 inch PixelSense Multi Touch Display Sandstone Metal Surface Laptop',
    rating: 4.5,
    image: 'https://laptopsworld.co.ke/wp-content/uploads/2025/02/475568119_654179910273039_1364333111921769179_n-scaled.jpg',
    brandColor: '#FF4F4F', // example brand color
  },
  {
    id: '2',
    brand: 'Flameless',
    name: 'LED Candle Lights 3-Pcs Pack (Model-CA14)',
    description: 'Flameless LED Candle Lights 3-Pcs Pack in Bangladesh',
    rating: 4.0,
    image: 'https://static.wixstatic.com/media/b04817_df045ce9017449eba6f67fa1ec25fba4~mv2.png/v1/fit/w_362,h_358,q_90/b04817_df045ce9017449eba6f67fa1ec25fba4~mv2.webp',
    brandColor: '#FFA500', // example brand color
  },
];

export default function WishlistScreen() {
   const navigation = useNavigation();
  // Renders each wishlist item in a card-like style
  const renderItem = ({ item }: { item: WishlistItem }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.cardContent}>
          {/* Brand Label */}
          <View style={[styles.brandLabel, { backgroundColor: item.brandColor }]}>
            <Text style={styles.brandLabelText}>{item.brand}</Text>
          </View>

          {/* Product Name & Description */}
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>

          {/* Rating */}
          <View style={styles.ratingRow}>
            <Text style={styles.ratingText}>
              {item.rating.toFixed(1)} rating
            </Text>
            {/* Add star icons or an actual star rating component if you like */}
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartButtonText}>Add to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>

      {/* Header / User Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNatPJ6cB-XkyGkyVj6QiL3WmSYZv4gUvzUw&s' }}
          style={styles.avatar}
        />
        <Text style={styles.headerTitle}>Wishlist & Favourites</Text>
      </View>

      {/* Wishlist Items */}
      <FlatList
        data={wishlistData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 8,
  },
  /* Card */
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    padding: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  productImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 8,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  brandLabel: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 4,
  },
  brandLabelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  productName: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    color: '#333',
  },
  /* Buttons */
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cartButton: {
    backgroundColor: '#5cb85c',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  cartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  buyButton: {
    backgroundColor: '#f0ad4e',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
