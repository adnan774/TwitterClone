import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './navigation/MainTabNavigator';

 function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator />
      {/* <SignOutButton /> */}
    </NavigationContainer>
  );
}

export default  App;
