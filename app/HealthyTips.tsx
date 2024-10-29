import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../components/HealthyTipsSTYLES'; // Styles are imported here
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
          <TouchableOpacity           onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/images/alabotpfp.jpg')} // Update with your image path
            style={styles.profilePic}
          />
          </TouchableOpacity>
        </View>

{/* Container for Title and Tappable Buttons */}
        <View style={styles.ContainerBody}>
        <Text style={styles.title}>Healthy Tips</Text>


        {/* Tips Section */}
        <View style={styles.tipsContainer1}>
          <TouchableOpacity style={styles.tipItem} onPress={() => navigation.navigate('HealthyTips')}>
            <Image source={require('../assets/images/tips1.png')} style={styles.tipImage} />
            <View style={styles.tipTextContainer}>
              <Text style={styles.tipText}>Practice Proper Breathing</Text>
              <Text style={styles.tipReadNow}>Read now &gt; </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tipItem} onPress={() => navigation.navigate('HealthyTips')}>
            <Image source={require('../assets/images/tips2.png')} style={styles.tipImage} />
            <View style={styles.tipTextContainer}>
              <Text style={styles.tipText}>Reduce the overall calories you consume. Have a healthy snacks on hand.</Text>
              <Text style={styles.tipReadNow}>Read now &gt; </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tipItem} onPress={() => navigation.navigate('HealthyTips')}>
            <Image source={require('../assets/images/tips3.png')} style={styles.tipImage} />
            <View style={styles.tipTextContainer}>
              <Text style={styles.tipText}>How to reduce Cellulite</Text>
              <Text style={styles.tipReadNow}>Read now &gt; </Text>
            </View>
          </TouchableOpacity>
          </View>
          </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navIconHomeContainer}
          onPress={() => navigation.navigate('Homepage')} // Navigating to Home
          > 
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
          onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/images/Profile.png')} style={styles.navIconProfile} />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Homepage;
