import React from 'react';
import styled from 'styled-components/native';
import {SearchBarProps} from '../redux/types';

const StyledInput = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.inputBackground};
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.main};
`;

const TextInput = ({placeholder, value, onChangeText}: SearchBarProps) => (
  <StyledInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
  />
);

export default TextInput;
