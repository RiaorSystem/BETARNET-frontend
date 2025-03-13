//Homepage

import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function FeaturedAds({ ads, autoScrollInterval = 3000 }) {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (ads.length === 0) return;
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [ads, autoScrollInterval]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentAdIndex * width,
        y: 0,
        animated: true,
      });
    }
  }, [currentAdIndex]);


// If no ads are available
  if (!ads || ads.length === 0) {
    return <Text style={{ textAlign: 'center', marginVertical: 20 }}>No ads available</Text>;
  }
  return (
    <View style={styles.autoScrollAdContainer}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {ads.map((ad) => (
          <View key={ad.id} style={styles.adSlide}>
            <Image source={{ uri: ad.image }} style={styles.adImage} onError={(e) => console.log(`Error loading ad ${ad.id}:`, e.nativeEvent.error)}
            />
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  autoScrollAdContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
  },
  adSlide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adImage: {
    width: '95%',
    height: '95%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
