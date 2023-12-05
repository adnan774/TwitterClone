import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, EvilIcons, AntDesign } from '@expo/vector-icons';


import styles from './styles';
import { TweetType } from '../../../../types';

export type FooterContainerProps = {
  tweet: TweetType
}

const Footer = ({ tweet }: FooterContainerProps) => {

    const [myLike, setMyLike] = useState(false);

  const toggleLike = () => {
    setMyLike(!myLike);
  };

  console.log(tweet);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name={"message-circle"} size={20} color={'grey'}/>
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={"retweet"} size={28} color={'grey'}/>
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={toggleLike}>
          <AntDesign name={!myLike ? "hearto" : "heart"} size={20} color={!myLike ? 'grey' : 'red'}/>
        </TouchableOpacity>
        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={"share-google"} size={28} color={'grey'}/>
      </View>
    </View>
  )
}

export default Footer;