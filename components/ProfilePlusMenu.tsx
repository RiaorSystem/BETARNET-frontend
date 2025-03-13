// profile page

// app/components/ProfilePlusMenu.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

interface ProfilePlusMenuProps {
  onClose: () => void;
}

export default function ProfilePlusMenu({ onClose }: ProfilePlusMenuProps) {
  return (
    <View style={styles.menuContainer}>
      {/* Optional close button */}
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeText}>X</Text>
      </TouchableOpacity>
      <View style={styles.menuItemsContainer}>
        {/* Wishlist */}
        <Link href="/profile/WishlistScreen" asChild>
          <TouchableOpacity style={styles.menuItem} onPress={onClose}>
            <FontAwesome name="heart" size={32} color="#fff" />
            <Text style={styles.menuItemText}>Wishlist</Text>
          </TouchableOpacity>
        </Link>
        {/* Messages */}
        <Link href="/profile/ChatRoom" asChild>
          <TouchableOpacity style={styles.menuItem} onPress={onClose}>
            <FontAwesome name="comment" size={32} color="#fff" />
            <Text style={styles.menuItemText}>Messages</Text>
          </TouchableOpacity>
        </Link>
        {/* Cart */}
        <Link href="/profile/CartScreen" asChild>
          <TouchableOpacity style={styles.menuItem} onPress={onClose}>
            <Ionicons name="cart-outline" size={32} color="#fff" />
            <Text style={styles.menuItemText}>Cart</Text>
          </TouchableOpacity>
        </Link>
        {/* Statistics */}
        <Link href="/profile/SellerAnalyticsScreen" asChild>
          <TouchableOpacity style={styles.menuItem} onPress={onClose}>
            <FontAwesome name="line-chart" size={32} color="#fff" />
            <Text style={styles.menuItemText}>Statistics</Text>
          </TouchableOpacity>
        </Link>
        {/* Shipped */}
        <Link href="/profile/OrderTrackingScreen" asChild>
          <TouchableOpacity style={styles.menuItem} onPress={onClose}>
            <Ionicons name="checkmark-done-outline" size={32} color="#fff" />
            <Text style={styles.menuItemText}>Shipped</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: '#4F6965',
    borderRadius: 10,
    padding: 16,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    zIndex: 1,
  },
  closeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});
