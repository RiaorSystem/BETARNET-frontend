
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CategoryDetails({ route }) {
  // route.params will contain the category object we pass during navigation
  const { categoryId} = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category: {category?.title}</Text>
      {/* 
        Here you can show more info, or fetch products belonging to 
        this category from an API using category.title
      */}
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
