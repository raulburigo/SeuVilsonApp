import * as Types from '../types.generated';

import { gql } from '@apollo/client';
export type TweetFragmentFragment = { __typename?: 'Tweet', _id: string, content: string, liked: boolean };

export const TweetFragmentFragmentDoc = gql`
    fragment TweetFragment on Tweet {
  _id
  content
  liked
}
    `;