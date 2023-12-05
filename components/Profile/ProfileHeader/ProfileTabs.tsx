// ProfileTabs.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ProfileTabsProps = {
  activeTab: 'tweets' | 'replies' | 'likes';
  onTabPress: (tab: 'tweets' | 'replies' | 'likes') => void;
};

const ProfileTabs = ({ activeTab, onTabPress }: ProfileTabsProps) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => onTabPress('tweets')}>
      <Text style={[styles.tab, activeTab === 'tweets' && styles.activeTab]}>Tweets</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onTabPress('replies')}>
      <Text style={[styles.tab, activeTab === 'replies' && styles.activeTab]}>Replies</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onTabPress('likes')}>
      <Text style={[styles.tab, activeTab === 'likes' && styles.activeTab]}>Likes</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
  },
  tab: {
    fontSize: 16,
  },
  activeTab: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default ProfileTabs;
