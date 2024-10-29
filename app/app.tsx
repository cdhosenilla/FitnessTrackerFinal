import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen componentss
import GetStarted from './GetStarted';
import Index from './index';
import Homepage from './Homepage'; 
import Workouts from './Workouts';
import Reports from './Reports';
import Profile from './Profile';
import HealthyTips from './HealthyTips';
import Signin from './Signin';
import Login from './Login';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="GetStarted" component={GetStarted}/>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Login" component={Login} />
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
