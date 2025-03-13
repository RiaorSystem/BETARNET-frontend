import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

const { width } = Dimensions.get('window');

export default function NewPostPreview({ activeTab, product }) {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  // We'll store a small set of recent assets (photos/videos) to display as thumbnails
  const [galleryImages, setGalleryImages] = useState<MediaLibrary.Asset[]>([]);

  // Request permissions & fetch recent media on mount
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need permissions to access your photos!');
          return;
        }
        // Fetch the most recent 20 photos/videos
        const recentMedia = await MediaLibrary.getAssetsAsync({
          first: 20,
          mediaType: [MediaLibrary.MediaType.photo, MediaLibrary.MediaType.video],
          sortBy: [MediaLibrary.SortBy.creationTime],
        });
        setGalleryImages(recentMedia.assets);
      }
    })();
  }, []);

  // Launch the system gallery picker (same as before)
  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Images + Videos
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled && result.assets?.length) {
      setSelectedMedia(result.assets[0].uri);
    }
  };

  // Launch the camera (same as before)
  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Photos or Videos
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled && result.assets?.length) {
      setSelectedMedia(result.assets[0].uri);
    }
  };

  // Render different UI based on which tab is active
  const renderPreviewContent = () => {
    switch (activeTab) {
      case 'POST':
      case 'STORY':
      case 'REEL':
        // Show chosen media or a placeholder
        return (
          <View style={styles.previewArea}>
            {selectedMedia ? (
              <Image source={{ uri: selectedMedia }} style={styles.mediaPreview} />
            ) : (
              <View style={styles.cameraPlaceholder}>
                <Ionicons name="camera" size={32} color="#fff" />
                <Text style={styles.previewText}>No media selected</Text>
              </View>
            )}

            {/* Scrollable row of recent media thumbnails */}
            <ScrollView horizontal style={styles.thumbnailRow}>
              {galleryImages.map((asset) => (
                <TouchableOpacity
                  key={asset.id}
                  onPress={() => setSelectedMedia(asset.uri)}
                  style={styles.thumbnailWrapper}
                >
                  <Image source={{ uri: asset.uri }} style={styles.thumbnail} />
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Buttons to open full gallery or camera */}
            <View style={styles.buttonsRow}>
              <TouchableOpacity style={styles.actionButton} onPress={pickFromGallery}>
                <Ionicons name="images" size={24} color="#fff" />
                <Text style={styles.buttonText}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={openCamera}>
                <Ionicons name="camera" size={24} color="#fff" />
                <Text style={styles.buttonText}>Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        );

      case 'AR':
        return (
          <View style={styles.arPreviewBox}>
            <Text style={styles.previewText}>[ AR Preview Area ]</Text>
          </View>
        );

      case 'LIVE':
        return (
          <View style={styles.livePlaceholder}>
            <Ionicons name="radio-outline" size={40} color="#fff" />
            <Text style={styles.previewText}>Ready to go Live?</Text>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.previewContainer}>
      {renderPreviewContent()}

      {/* If there's a product and not in AR, show the product info */}
      {product && activeTab !== 'AR' && (
        <Text style={styles.productInfo}>
          Previewing: {product.caption || product.title}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  previewArea: {
    alignItems: 'center',
  },
  cameraPlaceholder: {
    width: width * 0.5,
    height: width * 0.5,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  arPreviewBox: {
    width: '80%',
    height: 250,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  livePlaceholder: {
    width: width * 0.5,
    height: width * 0.5,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  mediaPreview: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productInfo: {
    color: '#ffd33d',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  thumbnailRow: {
    maxHeight: 80,
    marginBottom: 10,
  },
  thumbnailWrapper: {
    marginHorizontal: 4,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  buttonsRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 14,
  },
});
