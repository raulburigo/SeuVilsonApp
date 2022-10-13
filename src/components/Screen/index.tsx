import React, {PropsWithChildren} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import Styles from './styles';
import {IScreenProps} from './types';

const Screen: React.FC<PropsWithChildren<IScreenProps>> = ({
  children,
  scrollViewProps = {
    contentContainerStyle: {
      flexGrow: 1,
    },
  },
  justifyContent,
}) => {
  const theme = useTheme();

  return (
    <Styles.StyledSafeAreaView>
      <StatusBar backgroundColor={theme.colors.main} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: theme.colors.main}}
        {...scrollViewProps}>
        <Styles.ScreenContainer justifyContent={justifyContent}>
          {children}
        </Styles.ScreenContainer>
      </ScrollView>
    </Styles.StyledSafeAreaView>
  );
};

export default Screen;
