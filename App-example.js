import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For social media icons and arrow

export default function App() {
  return (
    <View style={styles.container}>
      {/* Tappable Arrow to go back */}
      <TouchableOpacity style={styles.backArrow}>
        <FontAwesome name="arrow-left" size={24} color="yellow" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>

      {/* Input fields for email, password, and confirm password */}
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} placeholderTextColor="#ccc" />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* "Or continue with" section */}
      <View style={styles.orContinue}>
        <View style={styles.line} />
        <Text style={styles.orContinueText}>or continue with</Text>
        <View style={styles.line} />
      </View>

      {/* Social Media Buttons */}
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={32} color="white" />
        </TouchableOpacity>
      </View>

      {/* "Already have an account?" section */}
      <View style={styles.signInSection}>
        <Text style={styles.alreadyText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1a33',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#1f2d46',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    color: 'white',
  },
  signUpButton: {
    backgroundColor: '#fbbc04',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: '#0a1a33',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orContinue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  orContinueText: {
    color: 'white',
    marginHorizontal: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  socialButton: {
    backgroundColor: '#1f2d46',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  signInSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alreadyText: {
    color: 'white',
  },
  signInText: {
    color: '#fbbc04',
    fontWeight: 'bold',
  },
});
