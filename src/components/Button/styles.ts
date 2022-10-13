import styled from 'styled-components/native';
import {IButtonProps} from './types';

const StyledButton = styled.TouchableOpacity<IButtonProps>`
  background-color: ${props =>
    props.secondary ? props.theme.colors.secondary : props.theme.colors.accent};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding: 8px;
  border-radius: 20px;
  align-items: center;
  color: ${props =>
    props.secondary ? props.theme.colors.main : props.theme.colors.secondary};
`;

const StyledButtonText = styled.Text<IButtonProps>`
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  color: ${props =>
    props.secondary ? props.theme.colors.main : props.theme.colors.secondary};
`;

export default {StyledButton, StyledButtonText};
