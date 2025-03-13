import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

type Address = {
  id: string;
  name: string;
  phone: string;
  addressLine: string;
  default?: boolean;
};

export default function SelectAddressScreen() {
  const router = useRouter();

  // Dummy addresses for demonstration
  const [addresses] = useState<Address[]>([
    {
      id: '1',
      name: 'victor muuo',
      phone: '+254 718578014',
      addressLine: '34657 | Mombasa | Kingo / Mbaraki / Mama Ngina Drive - Mombasa',
      default: true,
    },
    {
      id: '2',
      name: 'victor muuo',
      phone: '+254 726804440',
      addressLine: '34657 | Machakos Town - Machakos',
    },
  ]);

  // Keep track of selected address
  const [selectedAddressId, setSelectedAddressId] = useState(
    addresses.find((addr) => addr.default)?.id || ''
  );

  // Hard-coded example for summary
  const itemTotal = 'Ksh 903';
  const totalCost = 'Ksh 1,122';

  // Handle selecting an address
  const handleSelectAddress = (id: string) => {
    setSelectedAddressId(id);
  };

  // Handle "Edit" button (dummy)
  const handleEditAddress = (id: string) => {
    alert(`Edit address with ID: ${id}`);
  };

  // Handle "Add address" (dummy)
  const handleAddAddress = () => {
    alert('Add a new address');
  };

  // Cancel -> Go back
  const handleCancel = () => {
    router.back();
  };

  // Select Address -> e.g., go back to Checkout
  const handleSelect = () => {
    // In a real app, you'd store the selected address in global state or pass it back
    router.push('/profile/CartScreen/CheckoutScreen');
  };

  return (
    <View style={styles.screenContainer}>
      {/* ORANGE HEADER */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Select delivery address</Text>
          <TouchableOpacity
            onPress={() => alert('Contact us')}
            style={styles.helpButton}
          >
            <Text style={styles.helpButtonText}>Need Help? Contact us</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* MAIN CONTENT */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* ADDRESS BOOK TITLE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            ADDRESS BOOK ({addresses.length})
          </Text>
        </View>

        {/* ADDRESS LIST */}
        {addresses.map((addr) => {
          const isSelected = addr.id === selectedAddressId;
          return (
            <View key={addr.id} style={styles.addressCard}>
              {/* Radio Button + Info */}
              <TouchableOpacity
                style={styles.addressRow}
                onPress={() => handleSelectAddress(addr.id)}
              >
                <View style={styles.radioContainer}>
                  <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                    {isSelected && <View style={styles.radioInner} />}
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.addressName}>{addr.name}</Text>
                  <Text style={styles.addressPhone}>{addr.phone}</Text>
                  <Text style={styles.addressLine}>{addr.addressLine}</Text>
                  {addr.default && <Text style={styles.defaultLabel}>DEFAULT ADDRESS</Text>}
                </View>
              </TouchableOpacity>

              {/* Edit Link */}
              <TouchableOpacity onPress={() => handleEditAddress(addr.id)}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        {/* ADD ADDRESS */}
        <TouchableOpacity onPress={handleAddAddress} style={styles.addAddressButton}>
          <Text style={styles.addAddressText}>+ Add address</Text>
        </TouchableOpacity>

        {/* ORDER SUMMARY (like the screenshot's right column) */}
        <View style={styles.orderSummaryContainer}>
          <Text style={styles.summaryTitle}>Order summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Items total</Text>
            <Text style={styles.summaryValue}>{itemTotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery fees</Text>
            <Text style={styles.summaryValue}>Ksh 219</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total</Text>
            <Text style={styles.summaryValue}>{totalCost}</Text>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM BUTTONS */}
      <View style={styles.bottomButtonsRow}>
        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSelect} style={styles.selectButton}>
          <Text style={styles.selectButtonText}>Select address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    justifyContent: 'center', // center horizontally
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  helpButton: {},
  helpButtonText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 8,
  },
  /* Main Content */
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  /* Address Card */
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  addressRow: {
    flexDirection: 'row',
    flex: 1,
  },
  radioContainer: {
    marginRight: 10,
    marginTop: 4,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#F68B1E',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F68B1E',
  },
  addressName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  addressPhone: {
    fontSize: 13,
    color: '#555',
    marginBottom: 2,
  },
  addressLine: {
    fontSize: 13,
    color: '#555',
  },
  defaultLabel: {
    fontSize: 12,
    color: 'green',
    marginTop: 2,
  },
  editText: {
    color: '#007bff',
    fontSize: 13,
  },
  /* Add Address */
  addAddressButton: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  addAddressText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  /* Order Summary */
  orderSummaryContainer: {
    margin: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 6,
    backgroundColor: '#f7f7f7',
  },
  summaryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
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
  /* Bottom Buttons Row */
  bottomButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#ddd',
    borderRadius: 6,
  },
  cancelButtonText: {
    fontSize: 14,
    color: '#333',
  },
  selectButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#F68B1E',
    borderRadius: 6,
  },
  selectButtonText: {
    fontSize: 14,
    color: '#fff',
  },
});
