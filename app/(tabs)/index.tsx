import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../components/LogInSTYLES';
import { KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Function to handle form validation
  const handleSignUp = () => {
    let valid = true;
    const newError = { email: '', password: '', confirmPassword: '' };

    if (!email) {
      newError.email = '*This field is required';
      valid = false;
    }
    if (!password) {
      newError.password = '*This field is required';
      valid = false;
    }
    if (password !== confirmPassword) {
      newError.confirmPassword = '*bobo sala imo password';
      valid = false;
    }

    setError(newError);

    if (valid) {
      // Process sign-up logic here
      console.log('Form is valid, proceed with sign-up');
    }
  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior= "height"  // This will work for Android
  >
    <View style={styles.container}>
      {/* Back arrow */}
      <TouchableOpacity style={styles.backArrow}>
        <FontAwesome name="arrow-left" size={24} color="#ffc145" />
      </TouchableOpacity>

      {/* Create Account Title */}
      <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>

      {/* Email Input */}
      
      <Text style={styles.label}>Email yawa</Text>
      <TextInput
        style={[styles.inputEmail, { borderColor: error.email ? 'red' : '#ccc', maxHeight: 50, }]}
        placeholder="example@gmail.com"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />
      {error.email ? <Text style={styles.errorText}>{error.email}</Text> : null}

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainerPassword}>
        <TextInput
          style={[styles.input, { flex: 1, borderColor: error.password ? 'red' : '#ccc' }]}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <FontAwesome
            name={isPasswordVisible ? 'eye' : 'eye-slash'}
            size={20}
            color="#ccc"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
      {error.password ? <Text style={styles.errorText}>{error.password}</Text> : null}

      {/* Confirm Password Input */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainerConPass}>
        <TextInput
          style={[styles.input, { flex: 1, borderColor: error.confirmPassword ? 'red' : '#ccc' }]}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry={!isConfirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
          <FontAwesome
            name={isConfirmPasswordVisible ? 'eye' : 'eye-slash'}
            size={20}
            color="#ccc"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
      {error.confirmPassword ? <Text style={styles.errorText}>{error.confirmPassword}</Text> : null}

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Continue with Social */}
      <View style={styles.orContinue}>
        <View style={styles.line} />
        <Text style={styles.orContinueText}>or continue with</Text>
        <View style={styles.line} />
      </View>

      {/* Social Buttons */}
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButtonfb}>
          <FontAwesome name="facebook" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonGoogle}>
          <FontAwesome name="google" size={32} color="white" />
        </TouchableOpacity>
      </View>

      {/* Sign In Section */}
      <View style={styles.signInSection}>
        <Text style={styles.alreadyText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        </View>
        {/* Log In as Guest Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <a href='app\(tabs)\index.tsx' style={styles.signUpText}>Log In as Guest</a>
        </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
  );
}
