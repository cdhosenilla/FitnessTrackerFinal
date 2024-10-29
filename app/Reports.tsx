import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../components/ReportsSTYLES'; // Styles are imported here
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'; // For handling date formatting
import { StackNavigationProp } from '@react-navigation/stack';

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

  // Placeholders for w,h,bmi
  const weight = 52;
  const height = 157;
  const bmi = 21.1;

  // Current date and days for the calendar navigation
  const currentDay = moment().format('D');
  const currentDayLetter = moment().format('dd'); // Will return "M", "Tu", "W", etc.

  const dayTwoAgo = moment().subtract(2, 'days').format('dd D');
  const dayOneAgo = moment().subtract(1, 'days').format('dd D');
  const dayOneAhead = moment().add(1, 'days').format('dd D');
  const dayTwoAhead = moment().add(2, 'days').format('dd D');

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        {/* Header with Hamburger and Profile Icon */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => alert('Open Menu Placeholder')}>
            <FontAwesome name="bars" size={70} color="#FFC145" />
          </TouchableOpacity>
          <TouchableOpacity           onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/images/alabotpfp.jpg')} // Update with your image path
            style={styles.profilePic}
          />
          </TouchableOpacity>
        </View>

        {/* Greeting Section */}
        <Text style={styles.greeting}>Reports Soon!</Text>
        <Text style={styles.date}>{moment().format('MMMM D, YYYY')}</Text>

        {/* Date Navigation (Calendar) */}
        <View style={styles.dateNav}>
          {/* Two days ago */}
          <View style={styles.dateItem}>
            <Text style={styles.dayLabel}>{dayTwoAgo.split(' ')[0]}</Text>
            <Text style={styles.dayNumber}>{dayTwoAgo.split(' ')[1]}</Text>
          </View>

          {/* One day ago */}
          <View style={styles.dateItem}>
            <Text style={styles.dayLabel}>{dayOneAgo.split(' ')[0]}</Text>
            <Text style={styles.dayNumber}>{dayOneAgo.split(' ')[1]}</Text>
          </View>

          {/* Current day */}
          <View style={[styles.dateItem, styles.todayContainer]}>
            <Text style={[styles.dayLabel, styles.todayLabel]}>{currentDayLetter}</Text>
            <Text style={styles.dayNumber}>{currentDay}</Text>
          </View>

          {/* One day ahead */}
          <View style={styles.dateItem}>
            <Text style={styles.dayLabel}>{dayOneAhead.split(' ')[0]}</Text>
            <Text style={styles.dayNumber}>{dayOneAhead.split(' ')[1]}</Text>
          </View>

          {/* Two days ahead */}
          <View style={styles.dateItem}>
            <Text style={styles.dayLabel}>{dayTwoAhead.split(' ')[0]}</Text>
            <Text style={styles.dayNumber}>{dayTwoAhead.split(' ')[1]}</Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{weight}kg</Text>
            <Text style={styles.statLabel}>Weight</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{height}cm</Text>
            <Text style={styles.statLabel}>Height</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{bmi}</Text>
            <Text style={styles.statLabel}>BMI</Text>
          </View>
        </View>

        {/* Workout Difficulty Section */}
        <Text style={styles.chooseDifficulty}>Choose today's difficulty</Text>
        <View style={styles.workoutButtons}>
          <TouchableOpacity style={styles.workoutOption}>
            <Image source={require('../assets/images/beginner.jpg')} style={styles.workoutImage} />
            <Text>Beginner Workouts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.workoutOption}>
            <Image source={require('../assets/images/intermediate.jpg')} style={styles.workoutImage} />
            <Text>Intermediate Workouts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.workoutOption}>
            <Image source={require('../assets/images/Advance.jpg')} style={styles.workoutImage} />
            <Text>Advance Workouts</Text>
          </TouchableOpacity>
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
    </View>
  );
};

export default Homepage;
