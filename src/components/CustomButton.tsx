import React from 'react';
import styled from 'styled-components/native';
import {ButtonProps, WidthType} from '../redux/types';

const StyledButton = styled.TouchableOpacity<WidthType>`
  width: ${props => (props.width)};
  border-width: 1px;
  border-color: green;
  border-radius: 15px;
  height: 45px;
  background-color: green;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
`;

const StyledButtonText = styled.Text`
  text-align: center;
  color: white;
  font-weight: 600;
`;

const CustomButton = ({
  width = '49%',
  buttonText,
  onClickButton,
}: ButtonProps) => {
  return (
    <StyledButton width={width} onPress={onClickButton}>
      <StyledButtonText>{buttonText}</StyledButtonText>
    </StyledButton>
  );
};

export default React.memo(CustomButton);
