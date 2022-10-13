import React, {createContext, PropsWithChildren, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {IFeedContextData, IFeedScreenProps, ITweetForm} from './types';
import {useTweetsQuery} from '../../graphql/server/queries/GetTweets.generated';
import {useCreateTweetMutation} from '../../graphql/server/mutations/CreateTweet.generated';
import {useToggleTweetLikeMutation} from '../../graphql/server/mutations/ToggleTweetLike.generated';
import {TweetFragmentFragmentDoc} from '../../graphql/server/fragments/tweet.generated';
import {Tweet} from '../../graphql/server/types.generated';

const FeedContext = createContext({} as IFeedContextData);

const FeedProvider: React.FC<PropsWithChildren<IFeedScreenProps>> = ({
  children,
  ...props
}) => {
  const {data, loading} = useTweetsQuery({
    fetchPolicy: 'cache-and-network',
  });

  const [createTweetMutation] = useCreateTweetMutation({});
  const [toggleLikeMutation] = useToggleTweetLikeMutation({});

  const schema = yup
    .object({
      content: yup.string().trim().required(),
    })
    .required();

  const {handleSubmit, ...tweetForm} = useForm<ITweetForm>({
    defaultValues: {
      content: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (input: ITweetForm) => {
    createTweetMutation({
      variables: {
        payload: {
          content: input.content,
        },
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createTweet: {
          _id: 'temp-id',
          content: input.content,
          liked: false,
          __typename: 'Tweet',
        },
      },
      update: (cache, {data: _data}) => {
        cache.modify({
          fields: {
            tweets(
              existingTweets = {
                counter: 0,
                tweets: [],
              },
            ) {
              const newTweetRef = cache.writeFragment({
                data: _data?.createTweet,
                fragment: TweetFragmentFragmentDoc,
              });
              return {
                counter: existingTweets.counter++,
                tweets: existingTweets.tweets.concat(newTweetRef),
              };
            },
          },
        });
      },
    });
    tweetForm.reset();
  };

  const handleToggleLike = (tweet: Tweet) => {
    toggleLikeMutation({
      variables: {
        id: tweet._id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        toggleTweetLike: {
          ...tweet,
          liked: !tweet.liked,
        },
      },
    });
  };

  return (
    <FeedContext.Provider
      value={{
        form: tweetForm,
        onSubmitForm: handleSubmit(onSubmit),
        tweets: data?.tweets.tweets ?? [],
        loading,
        onToggleLike: handleToggleLike,
        counter: data?.tweets.counter ?? 0,
        ...props,
      }}>
      {children}
    </FeedContext.Provider>
  );
};

const useFeed = (): IFeedContextData => {
  const context = useContext(FeedContext);

  if (!context) {
    throw new Error('useFeed must be used within a FeedProvider');
  }

  return context;
};

export {FeedProvider, useFeed};
