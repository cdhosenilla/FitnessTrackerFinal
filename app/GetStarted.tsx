import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../components/GetStartedSTYLES'; // Styles are imported here
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

// Define RootStackParamList with all the screen names
type RootStackParamList = {
  Index: undefined;
  Homepage: undefined;
  HealthyTips: undefined; 
  Workouts: undefined;
  Reports: undefined;
  Profile: undefined;
  Signin: undefined;
  Login: undefined;
};

//optional for navbar (YAGNI HAHAHAHA)
type NavigationProp = StackNavigationProp<RootStackParamList, 'HealthyTips'>;

const Homepage = () => {
  // Use navigation with the correct type
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.mainContent}>
        {/* Header with Hamburger and Profile Icon */}
        <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome</Text>
        </View>

{/* Container for Title and Tappable Buttons */}
        <SafeAreaView style={styles.ContainerBody}>

        <Image
            source={require('../assets/images/GetStarted.png')} // Update with your image path
            style={styles.profilePic}/>
        <Image
            source={require('../assets/images/GetStarted2.png')} // Update with your image path
            style={styles.profilePic2}/>


        <TouchableOpacity style={styles.LogoutButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.LogoutButton} onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>

    </SafeAreaView>
  );
};

export default Homepage;
