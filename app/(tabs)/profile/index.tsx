
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Modal,  Pressable  } from 'react-native';
import { Link } from 'expo-router';

import Header from '@/components/Header';
import Bio from '@/components/Bio';
import FollowersRow from '@/components/FollowersRow';
import TabSwitcher from '@/components/TabSwitcher';
import PostItem from '@/components/PostItem';
import ReelItem from '@/components/ReelItem';
import FloatingButton from '@/components/FloatingButton';
import ProfilePlusMenu from '@/components/ProfilePlusMenu';
import HorizontalSidebar from '@/components/HorizontalSidebar';

const Profile: React.FC = () => {
  // --- User Data ---
  const [user, setUser] = useState({
    name: "Vickie's",
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNatPJ6cB-XkyGkyVj6QiL3WmSYZv4gUvzUw&s',
    followers: 10000,
    following: 100000,
    bio: 'Entrepreneur & fashion lover merged with Art. Check out my latest collection!',
    website: 'https://kush.com',
  });
  const [isLive, setIsLive] = useState(true);

  // --- Posts & Reels Data ---
  const [pinnedPosts, setPinnedPosts] = useState([
    {
      id: 'pin-1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsgE-LEMMvU_3jd-tVKuAWZibIS20emyEfo8yuRMe_l0iQ-18yJnFhSR3jk9LyDI76DQ&usqp=CAU',
      caption: 'My Featured Product',
      likes: 300,
    },
  ]);
  const [posts, setPosts] = useState([
    {
      id: 15,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNI1qD9AFMs7rJP1fhsRf5HNri7YTyOUcSg&s',
      caption: 'Awesome Product #1',
      likes: 45,
    },
    {
      id: 26,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iFFZWoIMbbljLxc1fO1VT7CkqCdE0TeWOQ&s',
      caption: 'Awesome Product #2',
      likes: 112,
    },
    {
      id: 37,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAb88Iygoz4DPTDJ6oXE9iN3XWXZ1HxaujtA&s',
      caption: 'Awesome Product #3',
      likes: 89,
    },
  ]);
  const [reels, setReels] = useState([
    { id: 1, videoUrl: 'https://youtu.be/AK7GY-8FJjg', caption: 'Short reel #1', likes: 10 },
    { id: 2, videoUrl: 'http://...', caption: 'Short reel #2', likes: 20 },
  ]);

  // --- UI State ---
  const [activeTab, setActiveTab] = useState<'Posts' | 'Reels'>('Posts');
  const [isFollowing, setIsFollowing] = useState(false);

// Modal state for plus menu
  const [plusMenuVisible, setPlusMenuVisible] = useState(false);

  // --- Handlers ---
  const handleFollow = () => setIsFollowing(!isFollowing);
  const handleLikePost = (postId: number) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
  };
  const handleCommentPost = (postId: number) => {
    console.log('Comment on post:', postId);
  };
  const handleLikeReel = (reelId: number) => {
    setReels((prev) =>
      prev.map((r) => (r.id === reelId ? { ...r, likes: r.likes + 1 } : r))
    );
  };
  const handleCommentReel = (reelId: number) => {
    console.log('Comment on reel:', reelId);
  };
  const handleTabChange = (tab: 'Posts' | 'Reels') => setActiveTab(tab);
  const handleFloatingButtonPress = () => setPlusMenuVisible(true);

 const buildEditProfileHref = () => {
    // Build a query string to pass user data
    const params = new URLSearchParams({
      name: encodeURIComponent(user.name),
      bio: encodeURIComponent(user.bio),
      website: encodeURIComponent(user.website),
      followers: String(user.followers),
      following: String(user.following),
    });
    return `/editProfile?${params.toString()}`;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        
 
        {/* Profile “Card” Container */}
        <View style={styles.profileContainer}>
          {/* Wrap the header and followers in a Link to the Edit Profile screen */}
          <Link href={buildEditProfileHref()} style={styles.topRow}>
            <Header user={user} isLive={isLive} />
            <View style={styles.followersContainer}>
              <FollowersRow
                following={user.following}
                followers={user.followers}
              />
            </View>
          </Link>

        {/* Bio below */}
        <Bio bio={user.bio} website={user.website} />
      </View>
        <HorizontalSidebar />
        
        <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />

        {activeTab === 'Posts' && (
          <>
            {/* Render pinned posts if needed */}
            {pinnedPosts.map((pin) => (
              <PostItem
                key={pin.id}
                post={pin}
                onLike={handleLikePost}
                onComment={handleCommentPost}
              />
            ))}
            {/* Render regular posts */}
            {posts.map((post) => (
              <PostItem
                key={post.id}
                post={post}
                onLike={handleLikePost}
                onComment={handleCommentPost}
              />
            ))}
          </>
        )}

        {activeTab === 'Reels' && (
          <>
            {reels.map((reel) => (
              <ReelItem
                key={reel.id}
                reel={reel}
                onLike={handleLikeReel}
                onComment={handleCommentReel}
              />
            ))}
          </>
        )}
      </ScrollView>
   {/* Floating Plus Button */}
      <FloatingButton onPress={handleFloatingButtonPress} />

      {/* Modal for Plus Menu */}
      <Modal
        visible={plusMenuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setPlusMenuVisible(false)}
      >
        <ProfilePlusMenu onClose={() => setPlusMenuVisible(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  profileContainer: {
    backgroundColor: '#cceaf0', // Example light color
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginBottom: 5,
  },
});
export default Profile;
