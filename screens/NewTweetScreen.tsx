import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import ProfilePicture from "../components/ProfilePicture";
import { Colors } from '../constants/Colors';

export default function NewTweetScreen() {

  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigation = useNavigation();


      const newTweet = {
        content: tweet,
        image: imageUrl,
        //userID: currentUser.attributes.sub,
      }
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture image={'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-8/s960x960/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=svjjE7DUkc0AX9yjcdC&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=1df4116c73c45a32ebad070704ca3333&oe=5F6ECD77'}/>
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder={"What's happening?"}
          />
          <TouchableOpacity >
            <Text style={styles.pickImage}>Pick a image</Text>
          </TouchableOpacity>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
  },
  pickImage: {
    fontSize: 18,
    color: Colors.light.tint,
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
  }
});