// LiveRoom

// app/components/LiveHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface LiveHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function LiveHeader({ activeTab, setActiveTab }: LiveHeaderProps) {
  const tabs = ['Live', 'Reels', 'Posts'];

  return (
    <View style={styles.headerContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
          <Text style={activeTab === tab ? styles.activeTab : styles.tab}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1c1e21',
  },
  activeTab: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 18,
  },
  tab: {
    color: 'white',
    fontSize: 16,
  },
});
