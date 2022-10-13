import * as Types from '../types.generated';

import { gql } from '@apollo/client';
import { TweetFragmentFragmentDoc } from '../fragments/tweet.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TweetsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TweetsQuery = { __typename?: 'Query', tweets: { __typename?: 'TweetList', counter: number, tweets: Array<{ __typename?: 'Tweet', _id: string, content: string, liked: boolean }> } };


export const TweetsDocument = gql`
    query Tweets {
  tweets {
    counter
    tweets {
      ...TweetFragment
    }
  }
}
    ${TweetFragmentFragmentDoc}`;

/**
 * __useTweetsQuery__
 *
 * To run a query within a React component, call `useTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTweetsQuery(baseOptions?: Apollo.QueryHookOptions<TweetsQuery, TweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TweetsQuery, TweetsQueryVariables>(TweetsDocument, options);
      }
export function useTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TweetsQuery, TweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TweetsQuery, TweetsQueryVariables>(TweetsDocument, options);
        }
export type TweetsQueryHookResult = ReturnType<typeof useTweetsQuery>;
export type TweetsLazyQueryHookResult = ReturnType<typeof useTweetsLazyQuery>;
export type TweetsQueryResult = Apollo.QueryResult<TweetsQuery, TweetsQueryVariables>;