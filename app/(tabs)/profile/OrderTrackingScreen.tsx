// app/screens/OrderTrackingScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function OrderTrackingScreen() {
  const navigation = useNavigation();
  // Sample order data
  const invoiceNumber = '123,395';
  const totalCost = 888; // example currency
  const orderItems = [
    {
      id: '1',
      name: 'Supreme Chicken Burgers',
      quantity: 4,
    },
    {
      id: '2',
      name: '2x Coke (1L)',
      quantity: 2,
    },
  ];
  const brandLogo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJGxV1Hu_zieRyxCRKhG4Jv1SJpyxi8aQpw&s'; // Example brand logo

  // Track the current order status step
  // Possible steps: 'PLACED', 'ON_THE_WAY', 'DELIVERED'
  const [orderStatus, setOrderStatus] = useState<'PLACED' | 'ON_THE_WAY' | 'DELIVERED'>(
    'ON_THE_WAY'
  );

  // Estimated time of arrival
  const estimatedTime = '10:32 min';

  // Star rating
  const [rating, setRating] = useState(0); // 0 to 5

  const handleStarPress = (starValue: number) => {
    setRating(starValue);
  };

  // Helper to check if a step is done
  const isStepDone = (step: 'PLACED' | 'ON_THE_WAY' | 'DELIVERED') => {
    // If orderStatus is ON_THE_WAY, 'PLACED' is done
    // If orderStatus is DELIVERED, 'PLACED' and 'ON_THE_WAY' are done
    if (orderStatus === 'PLACED') {
      return step === 'PLACED';
    } else if (orderStatus === 'ON_THE_WAY') {
      return step === 'PLACED' || step === 'ON_THE_WAY';
    } else if (orderStatus === 'DELIVERED') {
      return true;
    }
    return false;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>

      {/* Header / Invoice */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Order Tracker</Text>
        <Text style={styles.invoiceText}>Invoice: #{invoiceNumber}</Text>
      </View>

      {/* Brand / Items Summary */}
      <View style={styles.itemsCard}>
        <View style={styles.brandRow}>
          <Image source={{ uri: brandLogo }} style={styles.brandLogo} />
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Total Cost</Text>
            <Text style={styles.priceValue}>Ksh {totalCost}</Text>
          </View>
        </View>
        <Text style={styles.itemsHeader}>
          {orderItems.reduce((sum, item) => sum + item.quantity, 0)} Items
        </Text>
        {orderItems.map((item) => (
          <Text key={item.id} style={styles.itemText}>
            • {item.quantity} x {item.name}
          </Text>
        ))}
      </View>

      {/* Order Status Steps */}
      <View style={styles.statusContainer}>
        <View style={styles.statusRow}>
          <View style={styles.stepContainer}>
            <View
              style={[
                styles.stepCircle,
                isStepDone('PLACED') && styles.stepCircleActive,
              ]}
            >
              <Text style={styles.stepNumber}>1</Text>
            </View>
            <Text style={styles.stepLabel}>Order Placed</Text>
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepContainer}>
            <View
              style={[
                styles.stepCircle,
                isStepDone('ON_THE_WAY') && styles.stepCircleActive,
              ]}
            >
              <Text style={styles.stepNumber}>2</Text>
            </View>
            <Text style={styles.stepLabel}>On The Way</Text>
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepContainer}>
            <View
              style={[
                styles.stepCircle,
                isStepDone('DELIVERED') && styles.stepCircleActive,
              ]}
            >
              <Text style={styles.stepNumber}>3</Text>
            </View>
            <Text style={styles.stepLabel}>Delivered</Text>
          </View>
        </View>
      </View>

      {/* Estimated Arrival */}
      {orderStatus !== 'DELIVERED' && (
        <View style={styles.etaContainer}>
          <Text style={styles.etaTitle}>Arrived in:</Text>
          <Text style={styles.etaTime}>{estimatedTime}</Text>
        </View>
      )}

      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapTitle}>Tracking Order</Text>
        <Text style={styles.mapInvoice}>Invoice: 123842</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapPlaceholderText}>[Map Placeholder]</Text>
        </View>
      </View>

      {/* Rating Section (only show if delivered) */}
      {orderStatus === 'DELIVERED' && (
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>Rate your overall delivery experience</Text>
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((starValue) => (
              <TouchableOpacity key={starValue} onPress={() => handleStarPress(starValue)}>
                <Text
                  style={[
                    styles.starIcon,
                    rating >= starValue && styles.starIconActive,
                  ]}
                >
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Extra bottom spacing */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  /* Header */
  headerContainer: {
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  invoiceText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  /* Items Card */
  itemsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  brandLogo: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    fontSize: 12,
    color: '#666',
  },
  priceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemsHeader: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  itemText: {
    fontSize: 12,
    color: '#333',
    marginBottom: 2,
  },
  /* Order Status Steps */
  statusContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepContainer: {
    alignItems: 'center',
    width: width * 0.2,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  stepCircleActive: {
    backgroundColor: '#4caf50',
  },
  stepNumber: {
    color: '#fff',
    fontWeight: 'bold',
  },
  stepLabel: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  stepLine: {
    width: 20,
    height: 2,
    backgroundColor: '#ccc',
  },
  /* ETA */
  etaContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
  },
  etaTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  etaTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f44336',
  },
  /* Map Placeholder */
  mapContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
  },
  mapTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  mapInvoice: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  mapPlaceholder: {
    backgroundColor: '#ddd',
    height: 180,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPlaceholderText: {
    color: '#888',
  },
  /* Rating */
  ratingContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
  },
  ratingTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  starsRow: {
    flexDirection: 'row',
  },
  starIcon: {
    fontSize: 30,
    color: '#ccc',
    marginRight: 8,
  },
  starIconActive: {
    color: '#ffcc00',
  },
});
