import * as Types from '../types.generated';

import { gql } from '@apollo/client';
import { TweetFragmentFragmentDoc } from '../fragments/tweet.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ToggleTweetLikeMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type ToggleTweetLikeMutation = { __typename?: 'Mutation', toggleTweetLike: { __typename?: 'Tweet', _id: string, content: string, liked: boolean } };


export const ToggleTweetLikeDocument = gql`
    mutation ToggleTweetLike($id: String!) {
  toggleTweetLike(_id: $id) {
    ...TweetFragment
  }
}
    ${TweetFragmentFragmentDoc}`;
export type ToggleTweetLikeMutationFn = Apollo.MutationFunction<ToggleTweetLikeMutation, ToggleTweetLikeMutationVariables>;

/**
 * __useToggleTweetLikeMutation__
 *
 * To run a mutation, you first call `useToggleTweetLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTweetLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTweetLikeMutation, { data, loading, error }] = useToggleTweetLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleTweetLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleTweetLikeMutation, ToggleTweetLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleTweetLikeMutation, ToggleTweetLikeMutationVariables>(ToggleTweetLikeDocument, options);
      }
export type ToggleTweetLikeMutationHookResult = ReturnType<typeof useToggleTweetLikeMutation>;
export type ToggleTweetLikeMutationResult = Apollo.MutationResult<ToggleTweetLikeMutation>;
export type ToggleTweetLikeMutationOptions = Apollo.BaseMutationOptions<ToggleTweetLikeMutation, ToggleTweetLikeMutationVariables>;