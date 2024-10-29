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

  
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,

  },

  sectionTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 20,
    marginRight: 20,

  },
  line: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginVertical: 10,
    margin: 20
  },
  suggestionsContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    maxHeight: 200,
  },
  suggestionButton: {
    alignItems: 'center',
    width: 150,
    padding: 10,
    marginRight: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 170,
  },
  suggestionImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  suggestionText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  fullBodyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 0,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 5,
  },
  fullBodyImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
  },
  fullBodyText: {
    fontSize: 16,
    color: '#333',
  },
  fullBodyScrollContainer: {
    maxHeight: 300,
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
    backgroundColor: '#FFC145',
    paddingTop: 20,
    paddingLeft: 7,
    paddingRight: 7,
    marginRight: 40,
    left: 18,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
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