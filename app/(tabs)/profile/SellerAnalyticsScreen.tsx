// app/screens/SellerAnalyticsScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

export default function SellerAnalyticsScreen() {
  const navigation = useNavigation();
  // Sample data for "Top Store" table
  const topStores = [
    {
      id: '1',
      city: 'Miami, Florida',
      store: 'Zeni Fashions',
      quantity: '120 Quantity',
      totalSales: '25.4K',
    },
    {
      id: '2',
      city: 'Nairobi, Kenya',
      store: 'BetaRnet Shop',
      quantity: '85 Quantity',
      totalSales: '18.2K',
    },
    {
      id: '3',
      city: 'Tokyo, Japan',
      store: 'Samurai Electronics',
      quantity: '90 Quantity',
      totalSales: '21.5K',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>
      
      {/* Header / User Info */}
      <View style={styles.headerContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNatPJ6cB-XkyGkyVj6QiL3WmSYZv4gUvzUw&s' }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greeting}>Hello Vickie’s</Text>
          <Text style={styles.role}>Sales Manager</Text>
        </View>
        <View style={styles.escrowContainer}>
          <Text style={styles.escrowTitle}>Funds in Escrow</Text>
          <Text style={styles.escrowAmount}>14,000.00 Ksh</Text>
        </View>
      </View>

      {/* Dashboard & Date */}
      <View style={styles.dashboardContainer}>
        <Text style={styles.dashboardText}>Dashboard</Text>
        <Text style={styles.dateText}>4th Feb, 2025</Text>
      </View>

      {/* Stat Cards */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: '#C2F7FF' }]}>
          <Text style={styles.statTitle}>Total Earning</Text>
          <Text style={styles.statValue}>256.75K</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#FFE5AE' }]}>
          <Text style={styles.statTitle}>Average Earning</Text>
          <Text style={styles.statValue}>16.75K</Text>
          <Text style={styles.statSubText}>Daily earning this Month</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: '#E3FFD9' }]}>
          <Text style={styles.statTitle}>Conversion Rate</Text>
          <Text style={styles.statValue}>78.75%</Text>
          <Text style={styles.statSubText}>~6.25% greater than Month</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#FFD6E2' }]}>
          <Text style={styles.statTitle}>Total Sales</Text>
          <Text style={styles.statValue}>1000 sold</Text>
          <Text style={styles.statSubText}>Products in a year</Text>
        </View>
      </View>

      {/* Chart Placeholder */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Regular Sell</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartPlaceholderText}>[ Chart Placeholder ]</Text>
        </View>
      </View>

      {/* Top Store Table */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Top Store</Text>
        {/* Table Header */}
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 1.2 }]}>
            City
          </Text>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 1 }]}>
            Store
          </Text>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 1 }]}>
            Qty
          </Text>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 1 }]}>
            Total Sales
          </Text>
        </View>
        {/* Table Rows */}
        {topStores.map((store) => (
          <View key={store.id} style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1.2 }]}>{store.city}</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>{store.store}</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>{store.quantity}</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>{store.totalSales}</Text>
          </View>
        ))}
      </View>

      {/* Extra Bottom Space */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 16,
  },
  /* Header / User Info */
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerTextContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  role: {
    fontSize: 14,
    color: '#666',
  },
  escrowContainer: {
    backgroundColor: '#DFF5DD',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  escrowTitle: {
    fontSize: 12,
    color: '#333',
    marginBottom: 2,
  },
  escrowAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C7A7B',
  },
  /* Dashboard & Date */
  dashboardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dashboardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  /* Stat Cards */
  statsRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  statCard: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 5,
    minHeight: 80,
    justifyContent: 'center',
  },
  statTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  statSubText: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  /* Chart Placeholder */
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  chartPlaceholder: {
    backgroundColor: '#EEE',
    height: 150,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartPlaceholderText: {
    color: '#999',
  },
  /* Top Store Table */
  tableContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 6,
    marginBottom: 6,
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  tableCell: {
    fontSize: 14,
    color: '#333',
  },
  tableHeaderText: {
    fontWeight: 'bold',
  },
});
