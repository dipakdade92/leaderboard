import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {SearchBarProps} from '../redux/types';
import styled from 'styled-components/native';

const SearchContainer = styled(View)`
  height: 45px;
  width: 49%;
  border-width: 1px;
  border-color: black;
  border-radius: 15px;
  padding-horizontal: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
`;

const SearchIcon = styled(Image)`
  width: 18px;
  height: 18px;
  margin-right: 2px;
  align-self: center;
`;

const SearchTextInput = styled(TextInput)`
  width: 90%;
`;

const CustomSearchBar = ({
  placeholder,
  value,
  onChangeText,
}: SearchBarProps) => {
  return (
    <SearchContainer>
      <SearchIcon
        alt="search_icon"
        source={require('../assets/searchIcon.png')}
      />
      <SearchTextInput
        value={value}
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
      />
    </SearchContainer>
  );
};

export default React.memo(CustomSearchBar);
