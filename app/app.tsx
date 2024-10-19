import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import Index from './index'
import Homepage from './Homepage'; 
import HealthyTips from './HealthyTips';
import Workouts from './Workouts';
import Reports from './Reports';
import Profile from './Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="HealthyTips" component={HealthyTips} />
        <Stack.Screen name="Workouts" component={Workouts} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
