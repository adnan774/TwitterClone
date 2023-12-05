import React, {useEffect, useState} from 'react';
import { View, FlatList } from 'react-native';
import Tweet from '../Tweet';
import UserFleetsList from "../UserFleetsList";
import tweets from '../../data/tweets';
import { TweetType } from '../../types';

const Feed = () => {
    const [tweet, setTweets] = useState<TweetType[]>([]);
    const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    setLoading(true);
    // Simulate fetching data from an API
    setTimeout(() => {
      setTweets(tweets);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <View style={{width: '100%', flex: 1 }}>
      <FlatList
        data={tweet}
        renderItem={({item}) => <Tweet tweet={item}/>}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={fetchTweets}
        ListHeaderComponent={UserFleetsList}
      />
    </View>
  );
};

export default Feed;
