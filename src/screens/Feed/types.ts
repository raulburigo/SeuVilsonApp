import {UseFormReturn} from 'react-hook-form';
import {Tweet} from '../../graphql/server/types.generated';

interface ITweetForm {
  content: string;
}

interface IFeedScreenProps {}

interface IFeedContextData extends IFeedScreenProps {
  form: Omit<UseFormReturn<ITweetForm, object>, 'handleSubmit'>;
  onSubmitForm: () => Promise<void>;
  tweets: Tweet[];
  loading: boolean;
  onToggleLike: (tweet: Tweet) => void;
  counter: number;
}

export type {ITweetForm, IFeedScreenProps, IFeedContextData};
