// app/screens/NftMarketplaceScreen.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

// Example categories
const categories = [
  { id: 'all', label: 'All' },
  { id: 'art', label: 'Art' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'memberships', label: 'Memberships' },
  { id: 'pfps', label: 'PFPs' },
  { id: 'photography', label: 'Photography' },
  { id: 'music', label: 'Music' },
];

// Example featured NFTs
const featuredNfts = [
  {
    id: '1000',
    name: 'Exit Vectors by Keke',
    image: 'https://assets.coingecko.com/nft_contracts/images/15662/exit-vectors-by-keke-banner.png?1740106854',
    floor: '0.75 ETH',
  },
  {
    id: '2000',
    name: 'Human Unreadable by Operator',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71SKlBI3G1nC46JsQ9KIuZWPrxjofoHSmlQ&s',
    floor: '0.99 ETH',
  },
  {
    id: '3000',
    name: 'Signature Series by X',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMaby0orfQLEfIWZWzq5vbG69Av_szVm-RkA&s',
    floor: '1.2 ETH',
  },
];

// Example trending items
const trendingData = [
  {
    rank: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQznEiTRnMt-A0NOlPSwblLYRlzfbXylOHyg&s',
    collection: 'Wizzwoods Item',
    floorPrice: '< 0.01 BERA',
    volume: '1,842 BERA',
  },
  {
    rank: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo32JHi8JiqfGnsYFjV6LP8a-MxopB9DxzeQ&s',
    collection: 'Courtyard.io',
    floorPrice: '7.99 USDC',
    volume: '266 ETH',
  },
  {
    rank: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQaNdQ1N3GqrNeruKP4drLmyDAzp3ffoaq8Q&s',
    collection: 'Genesis',
    floorPrice: '0.04 ETH',
    volume: '41 ETH',
  },
  {
    rank: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pyYO83KzC3pn3qj4p2IWBgX9vI8xebYcaw&s',
    collection: 'Lil Pudgys',
    floorPrice: '1.07 ETH',
    volume: '120 ETH',
  },
  {
    rank: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlPnhAuDbv1HpO4YOxaOCevj7kktJzwJPkQ&s',
    collection: 'Memeland Pirates',
    floorPrice: '0.33 ETH',
    volume: '27 ETH',
  },
];

export default function NftMarketplaceScreen() {
  const [activeCategory, setActiveCategory] = useState('all');

  // ---- Featured Auto-Scroll Setup ----
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = Math.round(Dimensions.get('window').width * 0.6 + 16);

  // On mount, start auto-scrolling every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredNfts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Whenever currentIndex changes, scroll to that index
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  const getItemLayout = (_data: any, index: number) => ({
    length: cardWidth,
    offset: cardWidth * index,
    index,
  });

  // ---- Render Horizontal Categories ----
  const renderCategory = ({ item }: { item: typeof categories[0] }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        item.id === activeCategory && styles.activeCategoryButton,
      ]}
      onPress={() => setActiveCategory(item.id)}
    >
      <Text
        style={[
          styles.categoryText,
          item.id === activeCategory && styles.activeCategoryText,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  // ---- Render Featured NFTs (auto-scrolling carousel) ----
  const renderFeaturedItem = ({ item }: { item: typeof featuredNfts[0] }) => (
    <View style={[styles.featuredCard, { width: cardWidth - 16 }]}>
      <Image source={{ uri: item.image }} style={styles.featuredImage} />
      <Text style={styles.featuredName}>{item.name}</Text>
      <Text style={styles.featuredFloor}>Floor: {item.floor}</Text>
    </View>
  );

  // ---- Render each row in the trending table ----
  const renderTrendingItem = ({ item }: { item: typeof trendingData[0] }) => (
    <Link href={`/screens/NFTDetailScreen?collection=${item.collection}`} asChild>
      <TouchableOpacity style={styles.trendingRow}>
        {/* Rank */}
        <View style={[styles.trendingCell, { flex: 0.5 }]}>
          <Text style={styles.trendingCellText}>{item.rank}</Text>
        </View>

        {/* Collection (with image) */}
        <View style={[styles.trendingCell, { flex: 2, flexDirection: 'row', alignItems: 'center' }]}>
          <Image source={{ uri: item.image }} style={styles.trendingIcon} />
          <Text style={[styles.trendingCellText, { marginLeft: 6 }]} numberOfLines={1}>
            {item.collection}
          </Text>
        </View>

        {/* Floor Price */}
        <View style={[styles.trendingCell, { flex: 1 }]}>
          <Text style={styles.trendingCellText} numberOfLines={1}>
            {item.floorPrice}
          </Text>
        </View>

        {/* Volume */}
        <View style={[styles.trendingCell, { flex: 1 }]}>
          <Text style={styles.trendingCellText} numberOfLines={1}>
            {item.volume}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        {/* Left: brand or logo placeholder */}
        <Text style={styles.brandText}>NFT Marketplace</Text>

        {/* Right: placeholder icons for user/login */}
        <View style={styles.topBarRight}>
          <Ionicons name="search" size={24} color="#fff" style={styles.iconMargin} />
          <Ionicons name="person-circle-outline" size={24} color="#fff" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Category row */}
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
          contentContainerStyle={styles.categoryContainer}
        />

        {/* Featured NFTs (auto-scrolling) */}
        <Text style={styles.sectionTitle}>Featured Collections</Text>
        <FlatList
          ref={flatListRef}
          data={featuredNfts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderFeaturedItem}
          getItemLayout={getItemLayout}
          snapToInterval={cardWidth}
          snapToAlignment="start"
          decelerationRate="fast"
          contentContainerStyle={styles.featuredList}
        />

        {/* Trending/Top tabs + filters */}
        <View style={styles.trendingHeader}>
          <View style={styles.trendingTabRow}>
            <TouchableOpacity style={styles.trendingTabButton}>
              <Text style={styles.trendingTabText}>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.trendingTabButton, { marginLeft: 12 }]}>
              <Text style={styles.trendingTabText}>Top</Text>
            </TouchableOpacity>
          </View>

          {/* Time range filters */}
          <View style={styles.trendingTimeFilters}>
            <TouchableOpacity style={styles.timeFilterButton}>
              <Text style={styles.timeFilterText}>1h</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeFilterButton}>
              <Text style={styles.timeFilterText}>6h</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeFilterButton}>
              <Text style={styles.timeFilterText}>24h</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeFilterButton}>
              <Text style={styles.timeFilterText}>7d</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeFilterButton}>
              <Text style={styles.timeFilterText}>All</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Column headers for trending list */}
        <View style={styles.trendingHeaderRow}>
          <Text style={[styles.headerCell, { flex: 0.5 }]}>Rank</Text>
          <Text style={[styles.headerCell, { flex: 2 }]}>Collection</Text>
          <Text style={[styles.headerCell, { flex: 1 }]}>Floor Price</Text>
          <Text style={[styles.headerCell, { flex: 1 }]}>Volume</Text>
        </View>

        {/* Trending Items (vertical list) */}
        <FlatList
          data={trendingData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderTrendingItem}
        />
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark background to mimic OpenSea
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginRight: 12,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  // Categories
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  categoryButton: {
    backgroundColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  categoryText: {
    color: '#ccc',
  },
  activeCategoryButton: {
    backgroundColor: '#fff',
  },
  activeCategoryText: {
    color: '#000',
  },
  // Featured
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginVertical: 10,
  },
  featuredList: {
    paddingHorizontal: 10,
  },
  featuredCard: {
    backgroundColor: '#222',
    borderRadius: 10,
    marginRight: 12,
    padding: 10,
  },
  featuredImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  featuredName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  featuredFloor: {
    color: '#bbb',
    fontSize: 12,
  },
  // Trending
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  trendingTabRow: {
    flexDirection: 'row',
  },
  trendingTabButton: {
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },
  trendingTabText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  trendingTimeFilters: {
    flexDirection: 'row',
  },
  timeFilterButton: {
    backgroundColor: '#333',
    marginLeft: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  timeFilterText: {
    color: '#fff',
    fontSize: 12,
  },
  trendingHeaderRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#111',
  },
  headerCell: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  trendingRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  trendingCell: {
    justifyContent: 'center',
  },
  trendingCellText: {
    color: '#fff',
    fontSize: 12,
  },
  trendingIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  trendingRank: {
    flex: 0.5,
    color: '#fff',
    fontSize: 12,
  },
  trendingCollection: {
    flex: 2,
    color: '#fff',
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendingFloor: {
    flex: 1,
    color: '#fff',
    fontSize: 12,
  },
  trendingVolume: {
    flex: 1,
    color: '#fff',
    fontSize: 12,
  },
});
