import {userData} from './userListData';
import {UserDataType} from './redux/types';
import {Alert} from 'react-native';

const alterData = (sortedArr: UserDataType[]) => {
  const newData: UserDataType[] = [];
  sortedArr.forEach((item: UserDataType, index: number) => {
    let obj: UserDataType = {
      ...item,
      rank: index + 1,
    };
    newData.push(obj);
  });

  if (newData.length > 0) {
    return newData;
  }
};

export const setInitialData = () => {
  const arr = Object.values(userData);
  const sortedArr = arr.sort((a, b) => b.bananas - a.bananas);
  return alterData(sortedArr);
};

export const getSearchList = (userName: string, data: UserDataType[]) => {
  if (userName) {
    let searchedData = data.filter(
      (item: UserDataType) => (item?.rank ?? 0) < 11,
    );
    let bool = searchedData.some(item =>
      item.name.toLowerCase().includes(userName.toLowerCase()),
    );
    if (bool) {
      return searchedData;
    } else {
      let userData = data.find(item =>
        item.name.toLowerCase().includes(userName.toLowerCase()),
      );
      if (userData) {
        searchedData.splice(searchedData.length - 1, 1);
        searchedData.push(userData);
      }
      return searchedData;
    }
  } else {
    return [];
  }
};

export const getFuzzySearchList = (userName: string, data: UserDataType[]) => {
  if (userName) {
    let searchedData = data.filter((item: UserDataType) =>
      item.name.toLowerCase().includes(userName.toLowerCase()),
    );
    if (searchedData.length > 0) {
      return searchedData;
    } else {
      Alert.alert(
        'This user name does not exist! Please specify an existing user name!',
      );
      return [];
    }
  } else {
  }
};
