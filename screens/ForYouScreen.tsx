import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import Feed from '../components/Feed';
import NewTweetButton from '../components/NewTweetButton';

const ForYouScreen = () => {
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

export default ForYouScreen;
