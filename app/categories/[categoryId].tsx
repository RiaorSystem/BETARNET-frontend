// app/categories/[categoryId].js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CategoryDetails() {
  // This hook gives us the dynamic parameter from the URL
  const { categoryId } = useLocalSearchParams();
 console.log('Dynamic route parameter:', categoryId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category: {categoryId}</Text>
      {/* You can add additional logic here to fetch and display category-specific data */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});