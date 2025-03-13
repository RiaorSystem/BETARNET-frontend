import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function CheckoutScreen() {
  const router = useRouter();

  // Dummy data for demonstration
  const customerName = 'victor muuo';
  const customerAddress =
    '34657 | Mombasa | Kingo / Mbaraki / Mama Ngina Drive | +254 718578014';
  const pickupStation =
    'Skyeshop Kongowea Station (Opposite China Furnitures Kongowea / Next to Faysi Bakery, Room No. 2 / Next to Fayaz Bakery, Mkomani / Mombasa)';
  const estimatedDelivery = 'Between 12 March and 13 March';
  const cartItems = [
    {
      id: '1',
      name: 'M10 LED Display Bluetooth Headsets 9D Stereo Wireless Earphones Earpods',
      qty: 1,
    },
    {
      id: '2',
      name: 'Micellar Cleansing Water For Sensitive Skin - 400ml',
      qty: 1,
    },
  ];
  const itemTotal = 'Ksh 903';
  const deliveryFees = 'Ksh 219';
  const totalCost = 'Ksh 1,122';

  const goBackToShopping = () => {
    router.push('/profile/CartScreen');
  };

  const confirmOrder = () => {
    router.push('/profile/OrdersScreen');
  };

  // NEW: Navigate to the SelectAddressScreen
  const goToSelectAddress = () => {
    router.push('/profile/CartScreen/SelectAddressScreen');


  };

  return (
    <View style={styles.screenContainer}>
      {/* CUSTOM ORANGE HEADER */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Place your order</Text>
          <TouchableOpacity
            onPress={() => alert('Contact us')}
            style={styles.helpButton}
          >
            <Text style={styles.helpButtonText}>Need Help? Contact us</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* MAIN SCROLLABLE CONTENT */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* STEP 1: CUSTOMER ADDRESS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>1. CUSTOMER ADDRESS</Text>
            {/* Update the onPress to navigate to SelectAddressScreen */}
            <TouchableOpacity onPress={goToSelectAddress}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionBody}>
            <Text style={styles.boldText}>{customerName}</Text>
            <Text style={styles.regularText}>{customerAddress}</Text>
          </View>
        </View>

        {/* STEP 2: DELIVERY DETAILS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>2. DELIVERY DETAILS</Text>
            <TouchableOpacity onPress={() => alert('Change delivery')}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionBody}>
            <Text style={styles.boldText}>Pick-up Station</Text>
            <Text style={styles.lightText}>Delivery {estimatedDelivery}</Text>
            <Text style={styles.regularText}>{pickupStation}</Text>

            <View style={styles.shipmentBox}>
              <Text style={styles.shipmentText}>Shipment 1/1</Text>
              <Text style={styles.shipmentText}>Fulfilled by Betarnet</Text>
            </View>

            {/* Cart items */}
            {cartItems.map((item) => (
              <View key={item.id} style={styles.itemRow}>
                <Text style={styles.regularText}>
                  {item.name} {'\n'}QTY: {item.qty}
                </Text>
              </View>
            ))}

            <TouchableOpacity
              onPress={goBackToShopping}
              style={styles.modifyCartButton}
            >
              <Text style={styles.modifyCartText}>Modify cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* STEP 3: PAYMENT METHOD */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>3. PAYMENT METHOD</Text>
            <TouchableOpacity onPress={() => alert('Change payment method')}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionBody}>
            <Text style={styles.boldText}>Pay Now With Bank Card</Text>
            <Text style={styles.lightText}>
              Pay now and pay securely with PennyPal, Mastercard or Visa
            </Text>
          </View>
        </View>

        {/* ORDER SUMMARY */}
        <View style={styles.orderSummaryContainer}>
          <Text style={styles.orderSummaryTitle}>Order summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Items total</Text>
            <Text style={styles.summaryValue}>{itemTotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery fees</Text>
            <Text style={styles.summaryValue}>{deliveryFees}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total</Text>
            <Text style={styles.summaryValue}>{totalCost}</Text>
          </View>
          <View style={styles.couponRow}>
            <Text style={styles.couponLabel}>Enter code here</Text>
            <TouchableOpacity onPress={() => alert('Apply coupon')}>
              <Text style={styles.applyText}>APPLY</Text>
            </TouchableOpacity>
          </View>

          {/* Confirm Order Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={confirmOrder}>
            <Text style={styles.confirmButtonText}>Confirm order</Text>
          </TouchableOpacity>
          <Text style={styles.smallPrint}>
            By proceeding, you are acknowledging our Terms & Conditions
          </Text>
        </View>

        {/* Go Back & Continue Shopping */}
        <TouchableOpacity
          style={styles.backShoppingButton}
          onPress={goBackToShopping}
        >
          <Text style={styles.backShoppingText}>Go back & continue shopping</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// STYLES REMAIN UNCHANGED
const styles = StyleSheet.create({
  /* Screen Container */
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /* Orange Header */
  header: {
    backgroundColor: '#F68B1E',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // center the row horizontally
  },
  headerTitle: {
    flex: 1, // takes available space
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // center the text
  },
  helpButton: {
    // no absolute positioning
  },
  helpButtonText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 8,
  },
  /* Main Scroll Content */
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  /* Sections */
  section: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  changeText: {
    color: '#007bff',
    fontSize: 13,
  },
  sectionBody: {
    marginTop: 4,
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
    textAlign: 'left',
  },
  regularText: {
    fontSize: 13,
    color: '#333',
    marginBottom: 4,
    lineHeight: 18,
    textAlign: 'left',
  },
  lightText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
    textAlign: 'left',
  },
  /* Shipment Box */
  shipmentBox: {
    backgroundColor: '#f7f7f7',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shipmentText: {
    fontSize: 12,
    color: '#333',
  },
  itemRow: {
    marginBottom: 6,
  },
  modifyCartButton: {
    marginTop: 6,
  },
  modifyCartText: {
    color: '#007bff',
    fontSize: 13,
  },
  /* Order Summary */
  orderSummaryContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  orderSummaryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'left',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  summaryLabel: {
    fontSize: 13,
    color: '#555',
  },
  summaryValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
  couponRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  couponLabel: {
    fontSize: 13,
    color: '#888',
    fontStyle: 'italic',
  },
  applyText: {
    fontSize: 13,
    color: '#007bff',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#F68B1E',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  smallPrint: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  /* Back Shopping */
  backShoppingButton: {
    alignItems: 'center',
    padding: 12,
  },
  backShoppingText: {
    fontSize: 13,
    color: '#007bff',
  },
});
