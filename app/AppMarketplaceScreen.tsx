// app/screens/MarketplaceScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Link } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type Listing = {
  id: string;
  title: string;
  location: string;
  askingPrice: string;
  oldPrice?: string;
  priceReduction?: number; // e.g., 17
  description: string;
  type: string; // e.g., "iOS App"
  industry: string; // e.g., "Education"
  age: string; // e.g., "14 years"
  netProfit: string; // e.g., "USD $5,064 p/mo"
  isVerified?: boolean;
  isManaged?: boolean;
  isSponsored?: boolean;
  image?: string;
};

const listings: Listing[] = [
  {
    id: '1',
    title: 'iOS App | Education',
    location: 'Singapore',
    askingPrice: 'USD $150,000',
    oldPrice: 'USD $180,000',
    priceReduction: 17,
    description:
      'This iOS app offers phrasebooks for Japanese, Thai, Korean, Italian, and French to help users improve communication and language skills.',
    type: 'iOS App',
    industry: 'Education',
    age: '14 years',
    netProfit: 'USD $5,064 p/mo',
    isVerified: true,
    isManaged: true,
    isSponsored: true,
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: '2',
    title: 'iOS App | Travel',
    location: 'United States',
    askingPrice: 'USD $525,000',
    description:
      'A travel booking platform that helps travelers find and compare flight, hotel, and rental car deals in one place.',
    type: 'iOS App',
    industry: 'Travel',
    age: '5 years',
    netProfit: 'USD $3,200 p/mo',
    isVerified: false,
    isManaged: false,
    isSponsored: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqFluUkJRXKzBy5eM_v8Zo-Q3kRHIm0DhPw&s',
  },
];

type AppMarketplaceScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AppMarketplaceScreen'
>;

export default function AppMarketplaceScreen() {
  const navigation = useNavigation<AppMarketplaceScreenNavigationProp>();

  const renderItem = ({ item }: { item: Listing }) => (
    <View style={styles.card}>
      {/* Row 1: Image + Main Info */}
      <View style={styles.topRow}>
        <Image source={{ uri: item.image }} style={styles.listingImage} />
        <View style={styles.mainInfo}>
          {/* Title & Verified */}
          <View style={styles.titleRow}>
            <Text style={styles.listingTitle}>{item.title}</Text>
            {item.isVerified && <Text style={styles.verifiedBadge}>Verified Listing</Text>}
          </View>

          {/* Location */}
          <Text style={styles.location}>{item.location}</Text>

          {/* Price Row */}
          <View style={styles.priceRow}>
            {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
            <Text style={styles.askingPrice}>{item.askingPrice}</Text>
            {item.priceReduction && (
              <Text style={styles.priceReduction}>Reduced {item.priceReduction}%</Text>
            )}
          </View>
        </View>
      </View>

      {/* Row 2: Description */}
      <Text style={styles.description} numberOfLines={3}>
        {item.description}
      </Text>

      {/* Row 3: Managed / Sponsored Badges */}
      {(item.isManaged || item.isSponsored) && (
        <View style={styles.badgeRow}>
          {item.isManaged && <Text style={styles.managedBadge}>Managed by BetaRnet</Text>}
          {item.isSponsored && <Text style={styles.sponsoredBadge}>Sponsored</Text>}
        </View>
      )}

      {/* Row 4: Stats (Type, Industry, Age, Net Profit) */}
      <View style={styles.statsRow}>
        <Text style={styles.statItem}>Type: {item.type}</Text>
        <Text style={styles.statItem}>Industry: {item.industry}</Text>
        <Text style={styles.statItem}>Age: {item.age}</Text>
        <Text style={styles.statItem}>Net Profit: {item.netProfit}</Text>
      </View>

      {/* Row 5: Buttons */}
      <View style={styles.buttonsRow}>
       <Link href="/DeveloperAccountScreen" asChild>
        <TouchableOpacity style={styles.watchButton}>
          <Text style={styles.watchButtonText}>Watch Listing</Text>
        </TouchableOpacity>
        </Link>
        <Link href="/DeveloperAccountScreen" asChild>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View Listing</Text>
        </TouchableOpacity>
        </Link>
      </View>

    </View>
  );

  return ( 
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Marketplace</Text>
        <TouchableOpacity
  style={styles.devButton}
  onPress={() => {
    console.log('Button pressed, navigating to DeveloperAccountScreen...');
          navigation.navigate('DeveloperAccountScreen');

  }}
>
  <Text style={styles.devButtonText}>Dev Account</Text>
</TouchableOpacity>
      </View>

      {/* List of Listings */}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  /* Container */
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  listContent: {
    padding: 10,
  },

  /* Header */
  header: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  devButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  devButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  /* Card */
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  listingImage: {
    width: 120,
    height: 80,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: '#ddd',
  },
  mainInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    flexWrap: 'wrap',
  },
  listingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 6,
  },
  verifiedBadge: {
    fontSize: 12,
    color: '#007bff',
    fontWeight: '600',
  },
  location: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#999',
    marginRight: 8,
  },
  askingPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginRight: 8,
  },
  priceReduction: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  managedBadge: {
    fontSize: 12,
    color: '#ff9900',
    marginRight: 10,
  },
  sponsoredBadge: {
    fontSize: 12,
    color: '#28a745',
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  statItem: {
    fontSize: 12,
    color: '#666',
    marginRight: 10,
    marginBottom: 4,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  watchButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 8,
  },
  watchButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  viewButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#0057e7',
    borderRadius: 4,
  },
  viewButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});
