// ProfileHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ProfileHeaderProps = {
  username: string;
  onEditPress: () => void;
};

const ProfileHeader = ({ username, onEditPress }: ProfileHeaderProps) => (
  <View style={styles.container}>
    <Text style={styles.username}>{username}</Text>
    <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
      <Text style={styles.editButtonText}>Edit Profile</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileHeader;
