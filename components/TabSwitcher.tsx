

//Profile page
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TabSwitcherProps {
  activeTab: 'Posts' | 'Reels';
  onTabChange: (tab: 'Posts' | 'Reels') => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'Posts' && styles.activeTabButton]}
        onPress={() => onTabChange('Posts')}
      >
        <Ionicons name="grid-outline" size={18} color="#25292e" style={{ marginRight: 5 }} />
        <Text style={styles.tabButtonText}>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'Reels' && styles.activeTabButton]}
        onPress={() => onTabChange('Reels')}
      >
        <Ionicons name="videocam-outline" size={18} color="#25292e" style={{ marginRight: 5 }} />
        <Text style={styles.tabButtonText}>Reels</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: '#e0e0e0',
  },
  tabButtonText: {
    marginLeft: 3,
    fontSize: 14,
    color: '#25292e',
  },
});

export default TabSwitcher;
