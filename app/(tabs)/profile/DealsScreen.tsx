// app/screens/DealsScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

// Sample deal data (replace with real data or fetched from your backend)
const dealsData = [
  {
    id: '100',
    name: 'Discounted NFT #1',
    image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=NFT+1',
    price: '1.5 ETH',
    originalPrice: '3 ETH',
    discount: '50%',
    countdown: '02:15:30',
  },
  {
    id: '200',
    name: 'Limited Edition NFT #2',
    image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=NFT+2',
    price: '2 ETH',
    originalPrice: '4 ETH',
    discount: '50%',
    countdown: '01:10:20',
  },
  {
    id: '300',
    name: 'Flash Sale NFT #3',
    image: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=NFT+3',
    price: '0.8 ETH',
    originalPrice: '1.6 ETH',
    discount: '50%',
    countdown: '00:45:00',
  },
];

const DealItem = ({ item }: { item: any }) => {
  return (
    <TouchableOpacity style={styles.dealItem} onPress={() => {
      // You can add navigation logic here for item details if needed
      console.log('Tapped deal:', item.id);
    }}>
      <Image source={{ uri: item.image }} style={styles.dealImage} />
      <View style={styles.dealInfo}>
        <Text style={styles.dealName}>{item.name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.dealPrice}>{item.price}</Text>
          <Text style={styles.dealOriginalPrice}>{item.originalPrice}</Text>
        </View>
        <Text style={styles.discountText}>{item.discount} OFF</Text>
        <Text style={styles.countdownText}>Ends in: {item.countdown}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function DealsScreen() {
  const renderItem = ({ item }: { item: any }) => <DealItem item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deals & Promotions</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      </TouchableOpacity>
      <FlatList
        data={dealsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        numColumns={2} // Display items in a grid
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 80,
  },
  dealItem: {
    flex: 1,
    margin: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  dealImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  dealInfo: {
    padding: 8,
  },
  dealName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e60000',
    marginRight: 8,
  },
  dealOriginalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discountText: {
    fontSize: 14,
    color: '#e60000',
    fontWeight: '600',
    marginTop: 4,
  },
  countdownText: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});
