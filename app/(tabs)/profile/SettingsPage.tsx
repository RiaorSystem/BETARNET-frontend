// app/screens/SettingsPage.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const leftColumnSections = [
  {
    title: '1. Account Settings',
    items: [
      'Profile Details',
      'Account Verification',
      'Activity Log',
    ],
  },
  {
    title: '2. Security & Privacy',
    items: [
      'Two-Factor Authentication',
      'Who Can See My Profile?',
      'Data & Permissions',
      'App Lock',
    ],
  },
  {
    title: '3. Notifications & Preferences',
    items: [
      'Push Notifications',
      'Email & SMS Preferences',
      'Do Not Disturb Mode',
      'Customize Feeds & Recommendations',
    ],
  },
];

const rightColumnSections = [
  {
    title: '4. Payments & Transactions',
    items: [
      'Payment Methods',
      'Transaction History',
      'Withdraw Funds',
      'Subscription Management',
    ],
  },
  {
    title: '5. Marketplace & Selling',
    items: [
      'Manage Listing',
      'Order Management',
      'Shipping & Delivery Settings',
      'Seller Badges & Verification',
    ],
  },
  {
    title: '6. App Appearances & Preferences',
    items: [
      'Dark Mode / Light Mode',
      'Language & Region',
      'Currency Selection',
      'Accessibility Settings',
    ],
  },
  {
    title: '7. Community & Communication',
    items: [
      'Message Settings',
      'Comments & Reviews Settings',
      'Following & Followers',
      'Affiliate & Referral Systems',
    ],
  },
  {
    title: '8. Support & Legal',
    items: [
      'Help Center & FAQs',
      'Live Chat Support',
      'Report a Problem',
      'Terms & Conditions',
    ],
  },
  {
    title: '9. Logout & Account Management',
    items: [
      'Logout',
      // Add more items if you want sub-options
    ],
  },
  {
    title: 'Temporarily Deactivate',
    items: [
      'Delete account permanently',
      'Clear All personal Data',
      'Accessibility Settings',
    ],
  },
];

export default function SettingsPage() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>
      
      <Text style={styles.headerText}>Settings Page</Text>
      <View style={styles.columnsWrapper}>
        {/* Left Column */}
        <View style={styles.column}>
          {leftColumnSections.map((section) => (
            <View key={section.title} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.items.map((item) => (
                <View key={item} style={styles.itemRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Right Column */}
        <View style={styles.column}>
          {rightColumnSections.map((section) => (
            <View key={section.title} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.items.map((item) => (
                <View key={item} style={styles.itemRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  columnsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
  },
  section: {
    backgroundColor: '#f4f4f4',
    marginBottom: 12,
    padding: 8,
    borderRadius: 6,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bullet: {
    marginRight: 6,
    fontWeight: 'bold',
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});
