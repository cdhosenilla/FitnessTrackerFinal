// HomepageSTYLES.tsx
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A2342',

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
    marginBottom: 50,
  
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  //tips 

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: -10,
    paddingBottom: 40,
  },

  ContainerBody: {
    flex: 1,
    backgroundColor: '#B4B5B6', //darkblue
    padding: 20,
    borderRadius: 15,
    margin: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  tipsContainer1: {
    borderColor: 'black',
    flexDirection: 'column',
  },

  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,  
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 40,
  },
  tipImage: {
    width: 100,
    height: 100,
    borderRadius: 10, 
  },
  tipText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  tipReadNow: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
  },

  greeting: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: 20,
    marginVertical: 10,
    marginLeft: 20,
  },
  tipTextContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
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
    backgroundColor: '#FFC145',
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
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
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
