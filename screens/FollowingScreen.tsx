import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import NewTweetButton from '../components/NewTweetButton';
import Feed from '../components/Feed';

const FollowingScreen = () => {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FollowingScreen;
