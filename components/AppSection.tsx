// Apps 

// AppSection.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AppItem from './AppItem';

export default function AppSection({ title, apps, onAppPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {apps.map((app) => (
          <AppItem key={app.id} app={app} onPress={onAppPress} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
    paddingHorizontal: 10,
  },
});
