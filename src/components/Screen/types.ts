import {ScrollViewProps} from 'react-native';

interface IScreenContainerProps {
  justifyContent?: 'space-around' | 'space-between' | 'center';
}

interface IScreenProps extends IScreenContainerProps {
  scrollViewProps?: ScrollViewProps;
}

export type {IScreenContainerProps, IScreenProps};
