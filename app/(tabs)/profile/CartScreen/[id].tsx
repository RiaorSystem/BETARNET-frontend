import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

// Define a type for our product (cart item)
type CartItem = {
  id: string;
  name: string;
  image: string;
  oldPrice?: string;
  price: string;
  discount?: string;
  stockStatus?: string;
  description: string;
  quantity?: number;
};

// Example data mapping (replace with real data or an API call)
const productData: Record<string, CartItem> = {
  '1': {
    id: '1',
    name: 'RichRipple M10 LED Display Bluetooth Headsets 9D Stereo Wireless Earphones Earpods',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t_CVW9zgdniFU8M4DER3AkAuJ6Z1wZWWXA&s',
    oldPrice: 'Ksh 900',
    price: 'Ksh 450',
    discount: '49%',
    stockStatus: 'In Stock',
    description:
      'Experience high-quality sound with these wireless earphones. Featuring an LED display for battery level, ergonomic design, and noise reduction. Ideal for music lovers and those always on the go.\nEnjoy a high-quality, reliable product built for durability. Whether for personal use or as a gift, you can’t go wrong with this item. It offers the perfect balance between style, performance, and affordability.',
    quantity: 1,
  },
  '2': {
    id: '2',
    name: 'Sony A6400 Mirrorless Camera',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhYfn-ymddyR0vX0EYDNk9S9iQTkVcG44Rg&s',
    oldPrice: 'Ksh 100,000',
    price: 'Ksh 85,000',
    discount: '15%',
    stockStatus: 'In Stock',
    description:
      'With 18-135mm Lens. Capture stunning photos and videos with this versatile mirrorless camera. Ideal for both beginners and professionals.\nErgonomic design and excellent build quality. The A6400 offers lightning-fast autofocus, high ISO performance, and advanced video features for content creators.',
    quantity: 1,
  },
};

// Example reviews data
const reviewsData = [
  {
    id: '1',
    reviewer: 'John Doe',
    rating: 5,
    comment: 'Amazing product! Exceeded my expectations.',
  },
  {
    id: '2',
    reviewer: 'Jane Smith',
    rating: 4,
    comment: 'Very good quality, though the price is a bit steep.',
  },
  {
    id: '3',
    reviewer: 'Alice Johnson',
    rating: 4.5,
    comment: 'I love it! Highly recommended for anyone looking for premium quality.',
  },
];

// Hard-coded example of cart total for demonstration
const cartSubtotal = 'Ksh 903';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams(); // Get the product ID from the URL
  const router = useRouter();

  // Get the product from our dummy data
  const product = productData[id as string];

  // If product not found
  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found.</Text>
      </View>
    );
  }

  // Navigation
  const goBackToCart = () => {
    router.push('/profile/CartScreen');
  };
  const goToOrderPage = () => {
    router.push('/profile/CartScreen/CheckoutScreen');
  };

  // Dummy quantity update logic
  const increaseQuantity = () => alert('Quantity +1 (Implement logic)');
  const decreaseQuantity = () => alert('Quantity -1 (Implement logic)');
  const removeItem = () => alert('Item removed (Implement logic)');

  return (
    <ScrollView style={styles.scrollContainer}>
      {/* Back to Cart */}
      <TouchableOpacity onPress={goBackToCart} style={styles.backRow}>
        <Text style={styles.backText}>← Back to Cart</Text>
      </TouchableOpacity>

      {/* Product Card */}
      <View style={styles.productCard}>
        <Image source={{ uri: product.image }} style={styles.productImage} />

        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.stockStatus}>{product.stockStatus || 'In Stock'}</Text>

          {/* Price / Discount */}
          <View style={styles.priceRow}>
            {product.oldPrice && (
              <Text style={styles.oldPrice}>{product.oldPrice}</Text>
            )}
            <Text style={styles.newPrice}>{product.price}</Text>
            {product.discount && (
              <Text style={styles.discount}>{product.discount} OFF</Text>
            )}
          </View>

          {/* Quantity & Remove */}
          <View style={styles.actionsRow}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityValue}>{product.quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={removeItem}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Cart Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>CART SUMMARY</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>{cartSubtotal}</Text>
        </View>
        <TouchableOpacity onPress={goToOrderPage} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout ({cartSubtotal})</Text>
        </TouchableOpacity>
      </View>

      {/* Product Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Product Description</Text>
        <Text style={styles.descriptionText}>{product.description}</Text>
      </View>

      {/* Reviews & Ratings */}
      <View style={styles.reviewsContainer}>
        <Text style={styles.sectionTitle}>Reviews & Ratings</Text>
        <Text style={styles.overallRating}>Overall Rating: 4.5/5</Text>
        {reviewsData.map((review) => (
          <View key={review.id} style={styles.reviewItem}>
            <Text style={styles.reviewerName}>{review.reviewer}</Text>
            <Text style={styles.reviewRating}>Rating: {review.rating}/5</Text>
            <Text style={styles.reviewComment}>{review.comment}</Text>
          </View>
        ))}
      </View>

      {/* Extra spacing */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  backRow: {
    marginVertical: 10,
  },
  backText: {
    color: 'blue',
    fontSize: 16,
  },
  // PRODUCT CARD
  productCard: {
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    resizeMode: 'cover',
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  stockStatus: {
    fontSize: 12,
    color: 'green',
    marginBottom: 4,
  },
  // PRICE
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#999',
    marginRight: 6,
  },
  newPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 6,
  },
  discount: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  // ACTIONS
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityValue: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  removeText: {
    color: 'red',
    fontSize: 14,
  },
  // SUMMARY
  summaryContainer: {
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  summaryTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  // DESCRIPTION
  descriptionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
  // REVIEWS
  reviewsContainer: {
    marginBottom: 16,
  },
  overallRating: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  },
  reviewItem: {
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  reviewerName: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  reviewRating: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  reviewComment: {
    fontSize: 13,
    color: '#333',
  },
});
