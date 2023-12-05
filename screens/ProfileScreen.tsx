import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileTabs from '../components/Profile/ProfileHeader/ProfileTabs';
import ProfileHeader from '../components/Profile/ProfileHeader';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState<'tweets' | 'replies' | 'likes'>('tweets');
  const navigation = useNavigation();

  const handleEditPress = () => {
    navigation.navigate('EditProfile');
  };

  const tabContents = {
    tweets: <Text>Tweets content</Text>,
    replies: <Text>Replies content</Text>,
    likes: <Text>Likes content</Text>,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
      <ProfileHeader username="John Doe" onEditPress={handleEditPress} />
      <ProfileTabs activeTab={activeTab} onTabPress={setActiveTab} />
      <View style={styles.tabContent}>{tabContents[activeTab]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
