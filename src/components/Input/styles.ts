import styled from 'styled-components/native';
import {IStyledInputProps} from './types';

const StyledTextInput = styled.TextInput<IStyledInputProps>`
  border: 1px solid ${props => (props.error ? 'red' : 'blue')};
  width: 100%;
`;

export default {StyledTextInput};
