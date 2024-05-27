import {
  FILTER_NAME_ASC,
  FILTER_NAME_DESC,
  FILTER_RANK_LOWEST,
  GET_DATA,
  SEARCH_DATA,
  FUZZY_SEARCH_DATA,
} from '../types';

export const setInitialUserData = () => {
  return {
    type: GET_DATA,
  };
};

export const getSearchedUserData = (name: string) => {
  return {
    type: SEARCH_DATA,
    payload: name,
  };
};

export const getUserListByAscName = () => {
  return {
    type: FILTER_NAME_ASC,
  };
};

export const getUserListByDescName = () => {
  return {
    type: FILTER_NAME_DESC,
  };
};

export const getUserListByLowestRank = () => {
  return {
    type: FILTER_RANK_LOWEST,
  };
};

export const getFuzzySearchedUserData = (name: string) => {
  return {
    type: FUZZY_SEARCH_DATA,
    payload: name,
  };
};
