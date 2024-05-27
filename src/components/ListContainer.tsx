import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {
  rankText,
  nameText,
  numOfBananasText,
  pleaseSearchToGetUserList,
} from '../config';
import ListItem from './ListItem';
import {useSelector} from 'react-redux';

const Container = styled(View)`
  border-radius: 15px;
  border-width: 1px;
  border-color: black;
  width: 90%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-vertical: 10px;
  padding-horizontal: 10px;
`;

const HeaderRow = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  border-bottom-width: 1px;
  height: 60px;
`;

const ListContainer = ({userName}: any) => {
  const {searchedList} = useSelector((state: any) => state.userData);

  const list = (
    <Container>
      <HeaderRow>
        <Text style={{fontSize: 16, fontWeight: 'bold', width: '45%'}}>
          {nameText}
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            width: '15%',
          }}>
          {rankText}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            width: '40%',
            textAlign: 'right',
          }}>
          {numOfBananasText}
        </Text>
      </HeaderRow>

      <FlatList
        style={{width: '100%'}}
        data={searchedList}
        renderItem={item => <ListItem item={item.item} userName={userName} />}
      />
    </Container>
  );

  const emptyListMessage = (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 14,
          fontWeight: '600',
        }}>
        {pleaseSearchToGetUserList}
      </Text>
    </View>
  );

  return (
    <>{searchedList && searchedList.length > 0 ? list : emptyListMessage}</>
  );
};

export default React.memo(ListContainer);
