import React, {useCallback, useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUserListByLowestRank,
  getUserListByAscName,
  getUserListByDescName,
  getSearchedUserData,
  setInitialUserData,
  getFuzzySearchedUserData,
} from '../redux/action';
import CustomSearchBar from '../components/CustomSearchBar';
import CustomButton from '../components/CustomButton';
import {searchText, searchUserByName} from '../config';
import styled from 'styled-components/native';
import ListContainer from '../components/ListContainer';

const MainView = styled(View)`
  width: 90%;
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const FilterView = styled(View)`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 30px;
`;

const MainScreen = () => {
  const [userName, setUserName] = useState('');
  const {searchedList} = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialUserData());
  }, []);

  const onSearchClick = useCallback(() => {
    dispatch(getSearchedUserData(userName));
    Keyboard.dismiss();
  }, [userName]);

  useEffect(() => {
    dispatch(getFuzzySearchedUserData(userName));
  }, [userName]);

  const onAscendingOrder = useCallback(() => {
    dispatch(getUserListByAscName());
  }, []);

  const onDescendingOrder = useCallback(() => {
    dispatch(getUserListByDescName());
  }, []);

  const onLowestRankOrder = useCallback(() => {
    dispatch(getUserListByLowestRank());
  }, []);

  return (
    <>
      <MainView>
        <CustomSearchBar
          placeholder={searchUserByName}
          value={userName}
          onChangeText={(text: string) => setUserName(text)}
        />
        <CustomButton buttonText={searchText} onClickButton={onSearchClick} />
      </MainView>

      {userName.length > 0 && (
        <FilterView>
          <CustomButton
            width={'32%'}
            buttonText={'Name in Asc Order'}
            onClickButton={onAscendingOrder}
          />
          <CustomButton
            width={'32%'}
            buttonText={'Name in Desc Order'}
            onClickButton={onDescendingOrder}
          />
          <CustomButton
            width={'32%'}
            buttonText={'Rank in Lowest Order'}
            onClickButton={onLowestRankOrder}
          />
        </FilterView>
      )}

      <ListContainer searchedList={searchedList} userName={userName} />
    </>
  );
};

export default MainScreen;
