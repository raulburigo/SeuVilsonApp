import React from 'react';
import {Controller, FieldValues} from 'react-hook-form';
import {Text} from 'react-native';
import {IInputProps} from './types';
import Styles from './styles';

const Input = <T extends FieldValues>({
  control,
  name,
  ...props
}: IInputProps<T>): React.ReactElement => (
  <Controller
    control={control}
    name={name}
    render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
      <>
        <Styles.StyledTextInput
          onBlur={onBlur}
          onChangeText={onChange}
          error={!!error}
          value={value}
          {...props}
        />
        {error && <Text>{error.message}</Text>}
      </>
    )}
  />
);

export default Input;
