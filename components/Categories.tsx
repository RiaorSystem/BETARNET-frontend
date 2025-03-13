//Homepage
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Link } from 'expo-router';

export default function Categories({ categories }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat, index) => (
          <Link
            key={index}
            style={styles.categoryItem}
            href={{
              // The dynamic route defined in app/categories/[categoryId].tsx
              pathname: 'categories/[categoryId]',
              // Pass category.title (or category.id) as the parameter.
              params: { categoryId: cat.title },
            }}
            style={styles.categoryItem}
          >
            <Image source={{ uri: cat.image }} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{cat.title}</Text>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryItem: {
    width: 120,          // Adjust card width to your preference
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#25292e',
    overflow: 'hidden',
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  },
  categoryTitle: {
    fontSize: 14,
    marginVertical: 5,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
