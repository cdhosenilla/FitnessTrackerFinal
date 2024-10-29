import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../components/ProfilesSTYLES'; // Styles are imported here
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'; // For handling date formatting
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
      <View style={styles.mainContent}>
        {/* Header with Hamburger and Profile Icon */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => alert('Open Menu Placeholder')}>
            <FontAwesome name="bars" size={50} color="#FFC145" />
          </TouchableOpacity>
        </View>

        <View style={[styles.centerContainer]}>
          <Image
            source={require('../assets/images/alabotpfp.jpg')} // Update with your image path
            style={styles.profilePic}/>
        </View>


          {/* Buttons below the Profile Picture */}
              <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.profileButton} onPress={() => alert('Personal Info')}>
            <Text style={styles.buttonText}>Personal Info</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton} onPress={() => alert('Notification')}>
            <Text style={styles.buttonText}>Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton} onPress={() => alert('Settings')}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.LogoutButton} onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>  
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
           style={styles.navIconHomeContainer}
           onPress={() => navigation.navigate('Homepage')}>
          <Image source={require('../assets/images/home.png')} style={styles.navIconHome} />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navIconHTipsContainer}
          onPress={() => navigation.navigate('HealthyTips')} // Navigating to HealthyTips
        >
          <Image source={require('../assets/images/HealthyTips.png')} style={styles.navIconHTips} />
          <Text style={styles.HTipsText}>Healthy</Text>
          <Text style={styles.HTipsText}>Tips</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navIconWorkoutsContainer}
          onPress={() => navigation.navigate('Workouts')} // Navigating to Workouts
        >
          <Image source={require('../assets/images/Workouts.png')} style={styles.navIconWorkouts} />
          <Text>Workouts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navIconReportsContainer}
          onPress={() => navigation.navigate('Reports')} // Navigating to Reports       
        >
          <Image source={require('../assets/images/Reports.png')} style={styles.navIconReports} />
          <Text>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navIconProfileContainer}
          onPress={() => navigation.navigate('Profile')} // Navigating to Profile
        >
          <Image source={require('../assets/images/Profile.png')} style={styles.navIconProfile} />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Homepage;
