// ARScore

// app/components/NewPostBottomTabs.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const tabs = ['POST', 'STORY', 'REEL', 'AR', 'LIVE'];

export default function NewPostBottomTabs({ activeTab, setActiveTab }) {
  return (
    <View style={styles.bottomTabs}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={styles.tabItem}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTabs: {
    flexDirection: 'row',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#333',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#ffd33d',
  },
});
