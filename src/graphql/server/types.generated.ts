export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTweetInput = {
  content: Scalars['String'];
};

export type CreateUserInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ListUserInput = {
  _id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type LoggedUserOutput = {
  __typename?: 'LoggedUserOutput';
  /** Generated access_token of the user */
  access_token: Scalars['String'];
  refresh_token: RefreshToken;
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTeste: Teste;
  createTweet: Tweet;
  createUser: LoggedUserOutput;
  deleteUser: User;
  login: LoggedUserOutput;
  refreshToken: LoggedUserOutput;
  toggleTweetLike: Tweet;
  updateUser: User;
};


export type MutationAddTesteArgs = {
  counterInput: Scalars['Float'];
};


export type MutationCreateTweetArgs = {
  payload: CreateTweetInput;
};


export type MutationCreateUserArgs = {
  payload: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  _id: Scalars['String'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput;
};


export type MutationToggleTweetLikeArgs = {
  _id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  payload: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  teste: Teste;
  tweets: TweetList;
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};


export type QueryUsersArgs = {
  filters?: InputMaybe<ListUserInput>;
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  refreshToken: Scalars['String'];
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  tweetCreated: Tweet;
};

export type Teste = {
  __typename?: 'Teste';
  counter: Scalars['Int'];
  id: Scalars['ID'];
};

export type Tweet = {
  __typename?: 'Tweet';
  _id: Scalars['ID'];
  content: Scalars['String'];
  liked: Scalars['Boolean'];
};

export type TweetList = {
  __typename?: 'TweetList';
  counter: Scalars['Float'];
  tweets: Array<Tweet>;
};

export type UpdateUserInput = {
  _id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  name: Scalars['String'];
  username: Scalars['String'];
};
