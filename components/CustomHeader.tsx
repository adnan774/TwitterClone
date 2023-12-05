import React from 'react';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from './ProfilePicture';

const CustomHeader = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [profileImageUrl, setProfileImageUrl] = React.useState(null); 

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
      <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Profile')}>
            {profileImageUrl ? (
                <ProfilePicture image={profileImageUrl} size={32} />
            ) : (
                <Ionicons name="person-circle" size={32} color={'grey'} />
            )}
        </TouchableOpacity>
        <AntDesign name="twitter" size={24} color={Colors.light.tint} />
        <View style={styles.emptySpace} />
      </View>
      <View style={styles.tabButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('ForYou')}>
          <Text style={styles.tabButtonText}>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Following')}>
          <Text style={styles.tabButtonText}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    backgroundColor: Colors.light.background,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  profileIcon: {
    marginLeft: 10,
  },
  emptySpace: {
    width: 32,
  },
  tabButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  tabButtonText: {
    fontSize: 16,
  },
});

export default CustomHeader;
