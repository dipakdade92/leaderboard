import React from 'react';
import {FlagType, ListItemProps} from '../redux/types';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const ListItemContainer = styled(View)`
  height: 50px;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  flex-direction: row;
  border-bottom-color: lightgray;
  border-bottom-width: 1px;
`;

const ListItemText = styled(Text)<FlagType>`
  width: 50%;
  color: ${props => (props.flag ? 'red' : 'black')};
`;

const RankContainer = styled(Text)`
  text-align: center;
  width: 10%;
  color: black;
`;

const BananaTextContainer = styled(Text)`
  width: 40%;
  text-align: right;
  color: black;
`;

const ListItem = ({item, userName}: ListItemProps) => {
  let flag =
    userName !== '' && item.name.toLowerCase().includes(userName.toLowerCase());

  return (
    <ListItemContainer>
      <ListItemText flag={flag}>{item.name}</ListItemText>
      <RankContainer>{item.rank}</RankContainer>
      <BananaTextContainer>{item.bananas}</BananaTextContainer>
    </ListItemContainer>
  );
};

export default React.memo(ListItem);
