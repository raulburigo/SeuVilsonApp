import {Control, ControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';

interface IInputProps<T>
  extends TextInputProps,
    Pick<ControllerProps<T>, 'name'> {
  control: Control<T, object>;
}

interface IStyledInputProps {
  error: boolean;
}

export type {IInputProps, IStyledInputProps};
