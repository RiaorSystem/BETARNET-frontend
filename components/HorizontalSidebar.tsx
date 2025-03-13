//Profile page

// app/components/HorizontalSidebar.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function HorizontalSidebar() {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.iconRow}
      >
        {/* 1. Wishlist */}
        <Link href="/profile/WishlistScreen" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="heart" size={24} color="#fff" />
            <Text style={styles.iconText}>Wishlist</Text>
          </TouchableOpacity>
        </Link>

        {/* 2. Orders */}
        <Link href="/profile/OrdersScreen" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="clipboard-outline" size={24} color="#fff" />
            <Text style={styles.iconText}>Orders</Text>
          </TouchableOpacity>
        </Link>

        {/* 3. Cart */}
        <Link href="/profile/CartScreen" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="cart-outline" size={24} color="#fff" />
            <Text style={styles.iconText}>Cart</Text>
          </TouchableOpacity>
        </Link>

        {/* 4. Messages */}
        <Link href="/profile/ChatRoom" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={24} color="#fff" />
            <Text style={styles.iconText}>Messages</Text>
          </TouchableOpacity>
        </Link>

        {/* 5. Statistics */}
        <Link href="/profile/SellerAnalyticsScreen" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="line-chart" size={24} color="#fff" />
            <Text style={styles.iconText}>Statistics</Text>
          </TouchableOpacity>
        </Link>

          {/* 6. Settings */}
        <Link href="/profile/SettingsPage" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color="#fff" />
            <Text style={styles.iconText}>Settings</Text>
          </TouchableOpacity>
        </Link>

         {/* 7. Shipping */}
        <Link href="/profile/RiderShippingScreen" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="truck" size={24} color="#fff" />
            <Text style={styles.iconText}>Shipping</Text>
          </TouchableOpacity>
        </Link>
         {/* 8. Deals (Yees) */}
        <Link href="/profile/DealsScreen" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="pricetag-outline" size={24} color="#fff" />
            <Text style={styles.iconText}>Deals</Text>
          </TouchableOpacity>
        </Link>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F6965', // a blue background, for example
    paddingVertical: 10,
  },
  iconRow: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 14,
  },
});
