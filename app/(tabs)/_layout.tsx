import { Tabs, Redirect, Stack } from 'expo-router';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import { useSession } from '@/ctx';



export default function TabLayout() {
  const { session, isLoading } = useSession();
  // replace with splash screen
  if (isLoading) {
    return <Text>Loading...</Text>
  }
  // Only require authentication within the (tabs) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index" // This corresponds to app/(tabs)/index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      
        <Tabs.Screen
        name="LiveRoom"
        options={{
          title: 'LiveRoom',
          tabBarIcon: ({ color, focused }) => (
      <FontAwesome name="video-camera" size={24} color={color} />
            ),
        }}
        />
         <Tabs.Screen
         name="ARScreen"
         options={{
          title: 'AR',
          tabBarIcon: ({ color, focused}) => (
            <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={24} color={color} />
            ),
         }}
         />
       

         <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? 'user-circle' : 'user-circle-o'} size={24} color={color} />
          ),
        }}
        />

         {/* <Tabs.Screen
        name="AppMarketplaceScreen"
        options={{
          title: 'Apps',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'apps' : 'apps-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="NftMarketplace" 
        options={{
          title: 'NFT Marketplace',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cube' : 'cube-outline'} size={24} color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}