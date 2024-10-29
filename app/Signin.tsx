import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../components/LogInSTYLES';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type of the navigation prop for your screen
type RootStackParamList = {
  Index: undefined;
  Homepage: undefined;
  HealthyTips: undefined; 
  Workouts: undefined;
  Reports: undefined;
  Profile: undefined;
  Signin: undefined;
  Login: undefined;
  GetStarted: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Signin'>;

export default function App(){ 
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  // Function to handle form validation
  const handleSignUp = () => {
    let valid = true;
    const newError = { email: '', password: '' };

    if (!email) {
      newError.email = '*This field is required';
      valid = false;
    }
    if (!password) {
      newError.password = '*This field is required';
      valid = false;
    }

    setError(newError);

    if (valid) {
      // Process sign-up logic here
      console.log('Form is valid, proceed with sign-up');
      navigation.navigate('Homepage')
    }
    
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Please contact support for assistance with resetting your password kay bobo kaw.');
  };


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <View style={styles.container}>
        {/* Back arrow */}
        <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('GetStarted')}>
          <FontAwesome name="arrow-left" size={24} color="#ffc145" />
        </TouchableOpacity>

        {/* Create Account Title */}
        <Text style={styles.title}>SIGN UP TO YOUR ACCOUNT</Text>

        {/* Email Input */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={styles.label}>Email</Text>
          {error.email ? (
            <Text style={{ color: 'red', marginLeft: 10, marginTop: 10, }}>{error.email}</Text>
          ) : null}
        </View>
        <TextInput
          style={[styles.inputEmail, { borderColor: error.email ? 'red' : '#ccc', maxHeight: 50 }]}
          placeholder="example@gmail.com"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        
        
        {/* Password Input */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={styles.label}>Password</Text>
          {error.password ? (
            <Text style={{ color: 'red', marginLeft: 10 }}>{error.password}</Text>
          ) : null}
        </View>
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

        {/* Forgot Password Button */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

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
          <TouchableOpacity style={styles.socialButtonGoogle}>
            <FontAwesome name="google" size={32} color="white" />
          </TouchableOpacity>
        </View>

        {/* Sign In Section */}
        <View style={styles.signInSection} />

        {/* Log In as Guest Button */}
        <TouchableOpacity style={styles.GuestButton} onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.GuestText}>Log In as Guest</Text>
        </TouchableOpacity>
        
        <Text style={styles.alreadyText}>Don't have an Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>Create Account Now</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
