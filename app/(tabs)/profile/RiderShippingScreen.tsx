// app/screens/RiderShippingScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function RiderShippingScreen() {
  const navigation = useNavigation();
  // Placeholder data
  const seller = {
    name: 'Vickie (Seller)',
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNatPJ6cB-XkyGkyVj6QiL3WmSYZv4gUvzUw&s',
    phone: '+1 234 567 890',
    address: '1234 Market Street, Nairobi',
  };

  const rider = {
    name: 'Alex (Rider)',
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZTWgEoXjFwCFQeSTiK79xY6h6DPVnnn9HLSrw9DhCjoaxNDXfsZOJPxPW1dd6JkmdL8&usqp=CAU',
    phone: '+1 987 654 321',
    vehicle: 'Motorbike',
  };

  return (
    <ScrollView style={styles.container}>
     {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
         
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/400x300/cccccc/000000?text=Map+Placeholder',
          }}
          style={styles.mapImage}
        />
        {/* Example "pins" on the map as absolute icons */}
        <View style={[styles.pin, { top: '30%', left: '40%' }]}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/40/FFFF00/000000?text=Rider',
            }}
            style={styles.pinIcon}
          />
        </View>
        <View style={[styles.pin, { top: '60%', left: '20%' }]}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=S',
            }}
            style={styles.pinIcon}
          />
        </View>
        <View style={[styles.pin, { top: '10%', left: '70%' }]}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/40/00FF00/000000?text=B',
            }}
            style={styles.pinIcon}
          />
        </View>
      </View>

      {/* Shipping Details Card */}
      <View style={styles.detailsCard}>
        <Text style={styles.cardTitle}>Riders and Seller Shipping</Text>

        {/* Seller Info */}
        <View style={styles.infoRow}>
          <Image source={{ uri: seller.profilePic }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.nameText}>{seller.name}</Text>
            <Text style={styles.infoText}>{seller.phone}</Text>
            <Text style={styles.infoText}>{seller.address}</Text>
          </View>
        </View>

        {/* Rider Info */}
        <View style={[styles.infoRow, { marginTop: 10 }]}>
          <Image source={{ uri: rider.profilePic }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.nameText}>{rider.name}</Text>
            <Text style={styles.infoText}>{rider.phone}</Text>
            <Text style={styles.infoText}>{rider.vehicle}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>Call Rider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageButtonText}>Message Rider</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /* Map */
  mapContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#ccc',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pin: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  pinIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  /* Details Card */
  detailsCard: {
    backgroundColor: '#f9f9f9',
    margin: 12,
    padding: 12,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  callButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  callButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  messageButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  messageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
