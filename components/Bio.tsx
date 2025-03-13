
//Profile page

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

interface BioProps {
  bio: string;
  website: string;
}

const Bio: React.FC<BioProps> = ({ bio, website }) => {
  return (
    <View style={styles.bioContainer}>
      <Text style={styles.bioText}>{bio}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(website)}>
        <Text style={styles.websiteLink}>
          {website.replace(/^https?:\/\//, '')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bioContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bioText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#25292e',
  },
  websiteLink: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#1e90ff',
  },
});

export default Bio;
