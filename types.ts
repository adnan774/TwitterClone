export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  ForYou: undefined;
  Following: undefined;
  NewTweet: undefined;
  Fleet: undefined;
}

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string,
}

export type TweetType = {
  id: string,
  createdAt: string,
  user: UserType,
  content: string,
  image?: string,
  numberOfComments?: number,
  numberOfRetweets?: number,
  numberOfLikes?: number,
}

export type FleetType = {
  id: string,
  createdAt: string,
  user: UserType,
  type: string,
  text?: string,
  image?: string,
}

  