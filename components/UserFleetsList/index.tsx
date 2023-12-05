import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import UserFleetPreview from "../UserFleetPreview";

const UserFleetsList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    }
    fetchData();
  }, [])

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <UserFleetPreview user={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default UserFleetsList;