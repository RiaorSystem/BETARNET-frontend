

//Profile page
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FollowersRowProps {
  following: number;
  followers: number;
}

const FollowersRow: React.FC<FollowersRowProps> = ({ following, followers }) => {
  return (
    <View style={styles.followRow}>
      <View style={styles.followBox}>
        <Text style={styles.followNumber}>{following.toLocaleString()}</Text>
        <Text style={styles.followLabel}>Following</Text>
      </View>
      <View style={styles.verticalSeparator} />
      <View style={styles.followBox}>
        <Text style={styles.followNumber}>{(followers / 1000).toFixed(1)}k</Text>
        <Text style={styles.followLabel}>Followers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  followRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  followBox: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  followNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#25292e',
  },
  followLabel: {
    fontSize: 14,
    color: '#666',
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
});

export default FollowersRow;
