import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../components/LogInSTYLES';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type of the navigation prop for your screen
type RootStackParamList = {
  Index: undefined;
  Homepage: undefined;
  Signin: undefined;
  Login: undefined;
  GetStarted: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

function Homepage() {  // Change the function name to Homepage
  const navigation = useNavigation<NavigationProp>();

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
    if (!confirmPassword) {
      newError.confirmPassword = '*This field is required';
      valid = false;
    } else if (password !== confirmPassword) {
      newError.confirmPassword = '*Bobo mo sala password mo';
      valid = false;
    }

    setError(newError);

    if (valid) {
      // Process sign-up logic here
      console.log('Form is valid, proceed with sign-up');
      navigation.navigate('Homepage')
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <View style={styles.container} >
        {/* Back arrow */}
        <TouchableOpacity  style={styles.backArrow}  onPress={() => navigation.navigate('GetStarted')} >
          <FontAwesome name="arrow-left" size={24} color="#ffc145" />
        </TouchableOpacity>

        {/* Create Account Title */}
        <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>

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

       {/* Confirm Password Input */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={styles.label}>Confirm Password</Text>
          {error.confirmPassword ? (
            <Text style={{ color: 'red', marginLeft: 10 }}>{error.confirmPassword}</Text>
          ) : null}
        </View>
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
        
        <Text style={styles.alreadyText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signInText} onPress={() => navigation.navigate('Signin')}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Homepage; // Move export default to the end
