/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

import Button from '../../components/Button';
import Screen from '../../components/Screen';

import {IFeedScreenProps} from './types';

import {FeedProvider, useFeed} from './context';
import Input from '../../components/Input';

const FeedScreen: React.FC = () => {
  const {
    form: {
      control,
      formState: {isValid, isSubmitting},
    },
    onSubmitForm,
    tweets,
    loading,
    counter,
    onToggleLike,
  } = useFeed();

  return (
    <Screen
      justifyContent="space-around"
      scrollViewProps={{
        contentContainerStyle: {
          flexGrow: 1,
        },
      }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          padding: 16,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30}}>{`${counter} tweets`}</Text>
        <View
          style={{
            width: '100%',
            marginVertical: 16,
            alignItems: 'center',
          }}>
          <Input
            control={control}
            name="content"
            placeholder="digite seu tweet aqui"
          />
        </View>
        <Button
          title="tweetar"
          onPress={onSubmitForm}
          disabled={!isValid}
          loading={isSubmitting}
        />
      </View>

      {loading ? (
        <Text>loadeando...</Text>
      ) : (
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'red',
          }}>
          {tweets.map(tweet => (
            <View
              key={tweet._id}
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
              }}>
              <Text
                style={{
                  flex: 1,
                  margin: 16,
                  marginLeft: 0,
                }}>
                {tweet.content}
              </Text>
              <Button
                title={`${tweet.liked ? 'des' : ''}curtir`}
                secondary={tweet.liked}
                onPress={() => onToggleLike(tweet)}
              />
            </View>
          ))}
        </View>
      )}
    </Screen>
  );
};

const Feed: React.FC<IFeedScreenProps> = props => {
  return (
    <FeedProvider {...props}>
      <FeedScreen />
    </FeedProvider>
  );
};

export default Feed;
