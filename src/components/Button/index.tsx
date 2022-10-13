import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components/native';

import Styles from './styles';
import {IButtonProps} from './types';

const Button: React.FC<IButtonProps> = ({
  title,
  loading,
  onPress,
  disabled,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Styles.StyledButton
      activeOpacity={0.8}
      onPress={!loading && !disabled && !!onPress ? onPress : undefined}
      disabled={disabled}
      {...props}
      accessibilityRole="button">
      {loading && (
        <ActivityIndicator size="small" color={theme.colors.secondary} />
      )}
      {!loading && !!title && (
        <Styles.StyledButtonText {...props}>{title}</Styles.StyledButtonText>
      )}
    </Styles.StyledButton>
  );
};

export default Button;
