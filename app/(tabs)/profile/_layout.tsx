// app/(tabs)/profile/_layout.tsx
import { Stack } from 'expo-router';

export default function ProfileStackLayout() {
  return (
    <Stack>
      {/* Main Profile Screen */}
      <Stack.Screen
        name="index"
        options={{ title: 'Profile' }}
      />

      {/* Other Profile-Related Screens */}
      <Stack.Screen
        name="editProfile"
        options={{ title: 'Edit Profile' }}
      />
      <Stack.Screen
        name="OrdersScreen"
        options={{ title: 'Orders' }}
      />
      <Stack.Screen
        name="OrderTrackingScreen"
        options={{ title: 'Track Order' }}
      />
      <Stack.Screen
        name="RiderShippingScreen"
        options={{ title: 'Rider Shipping' }}
      />
      <Stack.Screen
        name="SellerAnalyticsScreen"
        options={{ title: 'Seller Analytics' }}
      />
      <Stack.Screen
        name="SettingsPage"
        options={{ title: 'Settings' }}
      />
      <Stack.Screen
        name="WishlistScreen"
        options={{ title: 'Wishlist' }}
      />
      <Stack.Screen
        name="DealsScreen"
        options={{ title: 'Deals' }}
      />
      <Stack.Screen
        name="ChatRoom"
        options={{ title: 'Chat' }}
      />

      {/* Cart Screens */}
      <Stack.Screen
        name="CartScreen/index"
        options={{ title: 'Cart' }}
      />
      <Stack.Screen
        name="CartScreen/[id]"
        options={{ title: 'Cart Item' }}
      />

      {/* Hide the default header for CheckoutScreen */}
      <Stack.Screen
        name="CartScreen/CheckoutScreen"
        options={{
          headerShown: false,
        }}
      />
 <Stack.Screen name="CartScreen/SelectAddressScreen/index" />
      {/* OR if you used the file approach (selectAddress.tsx): */}
      <Stack.Screen name="CartScreen/selectAddress" 
      options={{
          headerShown: false,
        }} />

    </Stack>
  );
}
