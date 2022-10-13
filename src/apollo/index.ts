import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import {persistCache, AsyncStorageWrapper} from 'apollo3-cache-persist';
import config from './cache';
// @ts-ignore
import loggerLink from 'apollo-link-logger';
import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
import {createClient} from 'graphql-ws';
import {getMainDefinition} from '@apollo/client/utilities';

const cache = new InMemoryCache(config);

persistCache({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
});

const httpLink = new HttpLink({
  uri: 'https://seu-vilson-api.herokuapp.com/graphql',
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://seu-vilson-api.herokuapp.com/graphql',
  }),
);

const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: from([loggerLink, splitLink]),
  cache,
});
