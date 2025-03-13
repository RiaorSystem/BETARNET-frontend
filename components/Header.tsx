

//Profile page
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HeaderProps {
  user: {
    name: string;
    avatar: string;
  };
  isLive?: boolean;
}

const Header: React.FC<HeaderProps> = ({ user, isLive }) => {
  return (
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.userAvatar} />
        {isLive && <View style={styles.statusIndicator} />}
        
      </View>
      <View style={styles.headerInfo}>
        <Text style={styles.greeting}>Hello {user.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cce2e8',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  avatarContainer: {
    position: 'relative',
  },
  userAvatar: {
    width: 60,
    height: 100,
    borderRadius: 30,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: '#fff',
  },
  headerInfo: {
    marginLeft: 15,
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#25292e',
  },
});

export default Header;
