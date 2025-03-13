// app/screens/LiveRoom.tsx
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
} from 'react-native';

// Components that remain in the components folder
import LiveHeader from '@/components/LiveHeader';
import LiveStatus from '@/components/LiveStatus';
import LivePost from '@/components/LivePost';
import LiveReel from '@/components/LiveReel';
import LiveSale from '@/components/LiveSale';
import LiveCard from '@/components/LiveCard';

// Screen components now moved to the screens folder
import LiveScreen from '../screens/LiveScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ARScreen from '../screens/ARScreen';
import CommentsScreen from '../screens/CommentsScreen';

// Sample posts data
const postsData = [
  {
    id: 1,
    type: 'post',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/032/487/851/small_2x/tender-touch-baby-care-products-presented-on-a-white-canvas-generative-ai-photo.jpg',
    caption: 'Nice view!',
    likes: 37700,
    comments: 13500,
    shares: 1786,
    views: 50000,
    user: '@joejustus',
  },
  {
    id: 2,
    type: 'reel',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    caption: 'Cool dance!',
    likes: 8200,
    comments: 2390,
    shares: 534,
    views: 12000,
    user: '@paylater',
  },
  {
    id: 3,
    type: 'sale', // "sale" is considered part of the "Live" tab (live sales)
    image:
      'https://salespromotions.org/wp-content/uploads/2018/11/Flash-Sale-Button-1-1024x724.jpg',
    title: 'Flash Sale 50% Off!',
    likes: 1234,
    comments: 89,
    shares: 12,
    views: 1000,
    user: '@shopNow',
  },
  {
    id: 4,
    type: 'live',
    user: '@blackgirlmagic',
    likes: 95000,
    comments: 1900,
    shares: 100,
    views: 45000,
  },
];

// Sample live sellers data for LiveStatus (replace with your backend data)
const liveSellers = [
  { id: 1, image: 'https://randomuser.me/api/portraits/women/1.jpg', name: '@liveSeller1' },
  { id: 2, image: 'https://randomuser.me/api/portraits/men/2.jpg', name: '@liveSeller2' },
  { id: 3, image: 'https://randomuser.me/api/portraits/women/3.jpg', name: '@liveSeller3' },
  { id: 4, image: 'https://randomuser.me/api/portraits/men/4.jpg', name: '@liveSeller4' },
];

type ScreenType = 'feed' | 'comments' | 'analytics' | 'live' | 'ar';
type TabType = 'Live' | 'Reels' | 'Posts';

export default function LiveRoom() {
  // Screen routing state
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('feed');
  const [selectedPost, setSelectedPost] = useState<any>(null);

  // Tab state to filter the feed
  const [activeTab, setActiveTab] = useState<TabType>('Live');

  // Modal visibility for creating new content
  const [showAddOptions, setShowAddOptions] = useState(false);

  // ====================
  // ROUTING HANDLERS
  // ====================
  const openAnalytics = (post: any) => {
    setSelectedPost(post);
    setCurrentScreen('analytics');
  };
  const openLive = (post: any) => {
    setSelectedPost(post);
    setCurrentScreen('live');
  };
  const openAR = (post: any) => {
    setSelectedPost(post);
    setCurrentScreen('ar');
  };
  const openComments = (post: any) => {
    setSelectedPost(post);
    setCurrentScreen('comments');
  };

  // New handler: when a live seller is tapped in LiveStatus
  const openLiveForSeller = (seller: any) => {
    setSelectedPost(seller);
    setCurrentScreen('live');
  };

  // ====================
  // TAB-BASED FILTERING
  // ====================
  const filteredPosts = postsData.filter((item) => {
    if (activeTab === 'Live') {
      // Show "live" and "sale" items
      return item.type === 'live' || item.type === 'sale';
    } else if (activeTab === 'Reels') {
      return item.type === 'reel';
    } else {
      return item.type === 'post';
    }
  });

  // ====================
  // FLATLIST RENDERING
  // ====================
  const renderItem = ({ item }: { item: any }) => {
    if (item.type === 'live') {
      return (
        <LiveCard post={item} onView={openAnalytics} onPressLive={openLive} />
      );
    }
    if (item.type === 'reel') {
      return (
        <LiveCard
          post={item}
          onView={openAnalytics}
          onPressAR={openAR}
          onPressComment={openComments}
        >
          <LiveReel reel={item} />
        </LiveCard>
      );
    }
    if (item.type === 'sale') {
      return (
        <LiveCard
          post={item}
          onView={openAnalytics}
          onPressAR={openAR}
          onPressComment={openComments}
        >
          <LiveSale sale={item} />
        </LiveCard>
      );
    }
    if (item.type === 'post') {
      return (
        <LiveCard
          post={item}
          onView={openAnalytics}
          onPressAR={openAR}
          onPressComment={openComments}
        >
          <LivePost post={item} />
        </LiveCard>
      );
    }
    return null;
  };

  // Combine header components: tabs (LiveHeader) and LiveStatus.
  const renderListHeader = () => (
    <View>
      <LiveHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <LiveStatus liveSellers={liveSellers} onPressProfile={openLiveForSeller} />
    </View>
  );

  // ====================
  // CONDITIONAL SCREEN RENDERING
  // ====================
  if (currentScreen === 'analytics' && selectedPost) {
    return <AnalyticsScreen post={selectedPost} goBack={() => setCurrentScreen('feed')} />;
  }
  if (currentScreen === 'live' && selectedPost) {
    return <LiveScreen post={selectedPost} goBack={() => setCurrentScreen('feed')} />;
  }
  if (currentScreen === 'ar' && selectedPost) {
    return <ARScreen post={selectedPost} goBack={() => setCurrentScreen('feed')} />;
  }
  if (currentScreen === 'comments' && selectedPost) {
    return <CommentsScreen post={selectedPost} goBack={() => setCurrentScreen('feed')} />;
  }

  // ====================
  // MAIN RENDER
  // ====================
  return (
    <View style={styles.container}>
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
        snapToAlignment="start"
        decelerationRate="fast"
      />

      {/* Floating "+" Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowAddOptions(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* Create Options Modal */}
      <Modal
        visible={showAddOptions}
        transparent
        animationType="slide"
        onRequestClose={() => setShowAddOptions(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create</Text>
            {['Go Live', 'Post a Photo', 'Post a Reel', 'Post an AR in 3D'].map((option) => (
              <TouchableOpacity key={option} style={styles.modalOption}>
                <Text style={styles.modalOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCancel}
              onPress={() => setShowAddOptions(false)}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  addButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#1d9bf0',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalOption: {
    paddingVertical: 10,
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
  },
  modalCancel: {
    marginTop: 16,
    alignItems: 'center',
  },
  modalCancelText: {
    color: 'red',
    fontSize: 16,
  },
});
