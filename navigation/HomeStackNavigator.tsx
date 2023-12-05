import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import CustomHeader from '../components/CustomHeader';
import ForYouScreen from '../screens/ForYouScreen';
import FollowingScreen from '../screens/FollowingScreen';
import NewTweetScreen from '../screens/NewTweetScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ForYou"
        component={ForYouScreen}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Stack.Screen
        name="Following"
        component={FollowingScreen}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewTweet"
        component={NewTweetScreen}
        options={{
          header: () => <CustomHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
