import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../components/WorkoutsSTYLES'; // Styles are imported here
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
type NavigationProp = StackNavigationProp<RootStackParamList, 'Workouts'>;

const Homepage = () => {
  // Use navigation with the correct type
  const navigation = useNavigation<NavigationProp>();
  const suggestions = [
    { id: '1', title: '15 min Arm Workout', image: require('../assets/images/beginner.jpg') },
    { id: '2', title: '10 min Ab Workout', image: require('../assets/images/beginner.jpg') },
    { id: '3', title: '20 min Cardio', image: require('../assets/images/beginner.jpg') },
  ];

  const fullBodyWorkouts = [
    { id: '1', title: '20 min Full Body Workout', image: require('../assets/images/beginner.jpg') },
    { id: '2', title: '30 min Sweaty Cardio Workout', image: require('../assets/images/beginner.jpg') },
  ];

  const armCoreWorkouts = [
    { id: '1', title: '20 min Full Body Workout', image: require('../assets/images/beginner.jpg') },
    { id: '2', title: '30 min Sweaty Cardio Workout', image: require('../assets/images/beginner.jpg') },


  ];

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

        {/* Suggestions Section */}
        <Text style={styles.sectionTitle}>Suggestions</Text>
        <View style={styles.line} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.suggestionsContainer}>
          {suggestions.map((item) => (
            <TouchableOpacity key={item.id} style={styles.suggestionButton}>
              <Image source={item.image} style={styles.suggestionImage} />
              <Text style={styles.suggestionText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.line} />
        <View>
  {/* Full Body Section Header */}
  <Text style={styles.sectionTitle}>Full Body</Text>

  {/* Wrap the Full Body Section in a ScrollView */}
  <ScrollView
    style={styles.fullBodyScrollContainer} // Add a style if needed
    showsVerticalScrollIndicator={false}
  >
    {fullBodyWorkouts.map((item) => (
      <TouchableOpacity key={item.id} style={styles.fullBodyButton}>
        <Image source={item.image} style={styles.fullBodyImage} />
        <Text style={styles.fullBodyText}>{item.title}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <Text style={styles.sectionTitle2}>Arm Core Workout</Text>
  <ScrollView
    style={styles.fullBodyScrollContainer} // Add a style if needed
    showsVerticalScrollIndicator={false}
  >
    {armCoreWorkouts.map((item) => (
      <TouchableOpacity key={item.id} style={styles.fullBodyButton}>
        <Image source={item.image} style={styles.fullBodyImage} />
        <Text style={styles.fullBodyText}>{item.title}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
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
      </View>
    </SafeAreaView>
  );
};

export default Homepage;