import {
  getFuzzySearchList,
  getSearchList,
  setInitialData,
} from '../../utilities';
import {
  GET_DATA,
  SEARCH_DATA,
  UserDataType,
  FILTER_NAME_ASC,
  FILTER_NAME_DESC,
  FILTER_RANK_LOWEST,
  FUZZY_SEARCH_DATA,
} from '../types';

const initialState = {
  initialUserList: [],
  searchedList: [],
};

export function userReducer(state: any = initialState, action: any): any {
  switch (action.type) {
    case GET_DATA: {
      const userRecords = setInitialData();
      return {
        ...state,
        initialUserList: userRecords,
      };
    }

    case SEARCH_DATA: {
      const list = getSearchList(action.payload, state.initialUserList);
      return {
        ...state,
        searchedList: list,
      };
    }

    case FUZZY_SEARCH_DATA: {
      const list = getFuzzySearchList(action.payload, state.initialUserList);
      return {
        ...state,
        searchedList: list,
      };
    }

    case FILTER_NAME_ASC: {
      const searchedData = state.searchedList;
      const ascNameSort = searchedData.sort(
        (a: UserDataType, b: UserDataType) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
      );
      return {
        ...state,
        searchedList: ascNameSort,
      };
    }

    case FILTER_NAME_DESC: {
      const searchedData = state.searchedList;
      const descNameSort = searchedData.sort(
        (a: UserDataType, b: UserDataType) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1,
      );
      return {
        ...state,
        searchedList: descNameSort,
      };
    }

    case FILTER_RANK_LOWEST: {
      const searchedFilterData = [...state.initialUserList];
      const lowerRankUsers = searchedFilterData.reverse().splice(1, 10);
      return {
        ...state,
        searchedList: lowerRankUsers,
      };
    }

    default:
      return state;
  }
}
