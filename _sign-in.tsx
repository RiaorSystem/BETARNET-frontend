import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import CheckBox from '@react-native-community/checkbox';
import { useSession } from '@/ctx';
import { FontAwesome } from '@expo/vector-icons';

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('@/assets/icons/ios-Dark.png')} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Ready to discover, trade, and grow?</Text>
      <Text style={styles.subText}>Let's get started!</Text>

      {/* Sign In Section */}
      <Text style={styles.signInText}>SIGN IN</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Remember Me */}
      <View style={styles.rememberContainer}>
        {/* r */}
        <Text style={styles.rememberText}>Remember me</Text>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => {
          signIn();
          router.replace('/');
        }}>
        <Text style={styles.signInButtonText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.signUpText}>
        Don't have an account yet? <Text style={styles.signUpLink} onPress={() => router.push('/sign-in')}>Sign Up</Text>
      </Text>

      {/* Social Login */}
      <Text style={styles.orText}>Or</Text>
      <Text style={styles.socialText}>Login with social media</Text>
      <View style={styles.socialIcons}>
        <FontAwesome name="facebook" size={30} color="#1877F2" />
        <FontAwesome name="apple" size={30} color="#000" />
        <FontAwesome name="instagram" size={30} color="#E4405F" />
        <FontAwesome name="google" size={30} color="#DB4437" />
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B3A3F',
    paddingHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subText: {
    fontSize: 14,
    color: '#CCC',
    marginBottom: 20,
  },
  signInText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  rememberText: {
    color: '#FFF',
    marginLeft: 5,
  },
  signInButton: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 15,
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  signUpText: {
    color: '#CCC',
    marginTop: 10,
  },
  signUpLink: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  orText: {
    color: '#CCC',
    marginTop: 10,
  },
  socialText: {
    color: '#CCC',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-evenly',
  },
});
