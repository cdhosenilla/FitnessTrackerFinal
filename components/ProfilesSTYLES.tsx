// HomepageSTYLES.tsx
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4B5B6',

  },
  mainContent: {
    flex: 1, // Fill the remaining space in the container
      
    // Additional styling for your main content can go here
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  centerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '20%',
    paddingBottom: '10%',
  },
  buttonContainer: {
    marginTop: 20, // Space between profile picture and buttons
    alignItems: 'center', // Center the buttons horizontally
    width: '100%',
  },
  
  profileButton: {
    backgroundColor: '#FFC145', // Customize the button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10, // Space between each button
    width: '80%', // Make button width responsive
    alignItems: 'center',
  },
  
  LogoutButton: {
    backgroundColor: '#FFC145', // Customize the button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: '20%',
    borderRadius: 10,
    marginVertical: 10, // Space between each button
    width: '80%', // Make button width responsive
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  greeting: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: 20,
    marginVertical: 10,
    marginLeft: 20,
  },
  date: {
    fontSize: 18,
    color: '#7E7E7E',
    paddingLeft: 7,
    marginLeft: 20,
  },
  dateNav: {
    flexDirection: 'row', // Horizontal arrangement for the date navigation
    justifyContent: 'space-around', // Spread the items evenly
    marginVertical: 20,
  },
  dateItem: {
    borderRadius: 10, // Optionally, add rounded corners
    padding: 20,

  },
  dayLabel: {
    paddingBottom: 15,
    fontSize: 18,
    color: '#7E7E7E',
  },
  dayNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  todayContainer: {
    backgroundColor: '#FFC145', // Background color for today’s date
    borderRadius: 10, // Optionally, add rounded corners
    padding: 20, // Ensure the content is centered with some space
  },

  todayLabel: {
    color: 'white', // White font color for today's day label
    paddingBottom: 15,
    fontSize: 18,
  },

  todayNumber: {
    color: '#FECF57', // Highlight the current day number
    fontWeight: 'bold',
  },
  day: {
    fontSize: 16,
    textAlign: 'center',
  },
  today: {
    color: '#FECF57',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#7E7E7E',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chooseDifficulty: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 20,
  },
  workoutButtons: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  workoutOption: {
    flexDirection: 'row', // Arrange children in a row (horizontally)
    alignItems: 'center', // Center align items vertically within the container
    padding: 10, // Optional: Add some padding for better 

  },
  workoutImage: {
    width: 60, // Set the width of the image
    height: 60, // Set the height of the image
    marginRight: 10, // Add some space between the image and text
  },

  workoutText: {
    fontSize: 16, // Set the font size for the text
    color: '#333', // Optional: Set text color
  },

  bottomNav: {
    position: 'absolute', // Use absolute positioning
    bottom: -10, // Position at the bottom of the screen
    left: 0, // Align with the left edge
    right: 0, // Align with the right edge
    flexDirection: 'row', // Arrange icons in a row
    justifyContent: 'space-around', // Distribute space between items
    backgroundColor: 'white', // Optional: Set a background color for visibility
    paddingVertical: 0, // Optional: Add some vertical padding
    elevation: 5, // Optional: Add elevation for Android shadow effect
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  

  navIconHomeContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  
  navIconHome: {
    width: 40,
    height: 40,
  },

  HTipsText: {
  fontSize: 15,
  textAlign: 'center',
  bottom: 6,
  marginBottom:0
  },


  navIconHTipsContainer: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    left: 7,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  navIconWorkoutsContainer: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 7,
    paddingRight: 7,
    marginRight: 40,
    left: 18,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },

  navIconReportsContainer: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 11,
    paddingRight: 11,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    right: 10,
    alignItems: 'center', // Center the Reports icon
  },
  
  navIconProfileContainer: {
    backgroundColor: '#FFC145',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    alignItems: 'center', // Center the Reports icon
  },

  navIconHTips: {
    width: 40,
    height: 40,
    marginLeft: 7,
  },

  navIconWorkouts: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  navIconReports: {
    width: 40,
    height: 40,
  },
  
  navIconProfile: {
    width: 40,
    height: 40,
  },

  textImageContainer: {
    alignItems: 'center',
  },
  
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },


});

export default styles;
