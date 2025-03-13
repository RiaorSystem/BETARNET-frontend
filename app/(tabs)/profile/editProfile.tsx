import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useSearchParams, Link } from 'expo-router';

export default function EditProfileScreen() {
  // Retrieve query parameters passed via the Link
  const { name, bio, website, followers, following } = useSearchParams();

  // Initialize local state with the query parameters
  const [userName, setUserName] = useState(name ? decodeURIComponent(name as string) : '');
  const [userBio, setUserBio] = useState(bio ? decodeURIComponent(bio as string) : '');
  const [userWebsite, setUserWebsite] = useState(website ? decodeURIComponent(website as string) : '');

  const handleSave = () => {
    // Implement your save logic here (update backend or global state)
    console.log('Saving profile changes:', { userName, userBio, userWebsite });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <Text>Name</Text>
      <TextInput
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
      />

      <Text>Bio</Text>
      <TextInput
        style={styles.input}
        value={userBio}
        onChangeText={setUserBio}
      />

      <Text>Website</Text>
      <TextInput
        style={styles.input}
        value={userWebsite}
        onChangeText={setUserWebsite}
      />

      <Button title="Save Changes" onPress={handleSave} />

      {/* Link back to the Profile screen */}
      <Link href="/" style={styles.link}>Back to Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
    borderRadius: 4,
    padding: 8
  },
  link: {
    marginTop: 16,
    color: 'blue'
  }
});
