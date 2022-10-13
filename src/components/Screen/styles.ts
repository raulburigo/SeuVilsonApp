import styled from 'styled-components/native';
import {IScreenContainerProps} from './types';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.main};
`;

const ScreenContainer = styled.View<IScreenContainerProps>`
  flex-grow: 1;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-around'};
  align-items: center;
`;

export default {StyledSafeAreaView, ScreenContainer};
