
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import NewPostTopBar from '@/components/NewPostTopBar';
import NewPostPreview from '@/components/NewPostPreview';
import NewPostBottomTabs from '@/components/NewPostBottomTabs';

const { height } = Dimensions.get('window');

export default function NewPostScreen({ route = {}, navigation }) {
  const { product } = route.params || {};
  const [activeTab, setActiveTab] = useState('POST');

  const handleNext = () => {
    console.log(`Proceeding with ${activeTab} creation`);
    // Implement further logic for posting content here
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { height }]}>
      <NewPostTopBar onClose={handleClose} onNext={handleNext} />
      <NewPostPreview activeTab={activeTab} product={product} />
      <NewPostBottomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
});
