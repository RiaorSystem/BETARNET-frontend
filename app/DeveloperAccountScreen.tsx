// app/screens/DeveloperAccountScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Link } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Updated path
import { useNavigation } from '@react-navigation/native';

type DeveloperAccountScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DeveloperAccountScreen'
>;

export default function DeveloperAccountScreen() {
  const navigation = useNavigation<DeveloperAccountScreenNavigationProp>();

  console.log('DeveloperAccountScreen mounted');

  const handleSellNow = () => {
    console.log('Sell Now button pressed');
  };

  const handleGetFreeValuation = () => {
    console.log('Get a Free Valuation button pressed');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100/000000/fff?text=Dev' }}
            style={styles.profileImage}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.name}>Developer Name</Text>
            <Text style={styles.username}>@dev_username</Text>
          </View>
        </View>

        {/* Account Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>BETA-DEV</Text>
        </View>

        {/* Navigation Tabs */}
        <View style={styles.navTabs}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>App Management</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Statistics</Text>
          </TouchableOpacity>
        </View>

        {/* Statistics Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Regular Sell</Text>
          <View style={styles.chartPlaceholder} />
        </View>

        {/* Sell Now & Get a Free Valuation */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.sellButton} onPress={handleSellNow}>
            <Text style={styles.sellButtonText}>Sell Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.valuationButton} onPress={handleGetFreeValuation}>
            <Text style={styles.valuationButtonText}>Get a Free Valuation</Text>
          </TouchableOpacity>
        </View>

        {/* Back Button */}
        <Link href="/AppMarketplaceScreen" asChild>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back to Marketplace</Text>
        </TouchableOpacity>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileDetails: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: '#666',
  },
  statusContainer: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  statusTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navTabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartPlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  buttonContainer: {
    width: '90%',
    marginBottom: 20,
  },
  sellButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  sellButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  valuationButton: {
    backgroundColor: '#0275d8',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  valuationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
