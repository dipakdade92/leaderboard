import {rootReducer} from '../src/redux/reducers';
import {
  GET_DATA,
  SEARCH_DATA,
  FUZZY_SEARCH_DATA,
  FILTER_NAME_ASC,
  FILTER_NAME_DESC,
  FILTER_RANK_LOWEST,
} from '../src/redux/types';
import {userData} from '../src/userListData';

jest.mock('../src/utilities', () => ({
  getFuzzySearchList: jest.fn(),
  getSearchList: jest.fn(),
  setInitialData: jest.fn(),
}));

import {
  getFuzzySearchList,
  getSearchList,
  setInitialData,
} from '../src/utilities';

describe('userReducer', () => {
  const initialEmptyState = {
    userData: {
      initialUserList: [],
      searchedList: [],
    },
  };
  const initialState = {
    userData: {
      initialUserList: [],
      searchedList: [],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the initial state when an unknown action is passed', () => {
    const action = {type: 'UNKNOWN_ACTION'};
    const newState = rootReducer(undefined, action);
    expect(newState).toEqual(initialEmptyState);
  });

  it('should handle GET_DATA', () => {
    const mockUserData = [{id: 1, name: 'John Doe', rank: 5}];
    setInitialData.mockReturnValue(mockUserData);

    const action = {type: GET_DATA};
    const expectedState = {
      userData: {
        initialUserList: mockUserData,
        searchedList: [],
      },
    };

    const newState = rootReducer(initialState, action);
    expect(newState).toEqual(expectedState);
    expect(setInitialData).toHaveBeenCalled();
  });

  it('should handle SEARCH_DATA', () => {
    const mockSearchList = [{id: 1, name: 'John Doe', rank: 5}];
    getSearchList.mockReturnValue(mockSearchList);

    const action = {type: SEARCH_DATA, payload: 'John'};
    const initialStateWithData = {
      initialUserList: mockSearchList,
      searchedList: [],
    };
    const expectedState = {
      userData: {
        initialUserList: [],
        searchedList: mockSearchList,
      },
    };

    const newState = rootReducer(initialStateWithData, action);
    expect(newState).toEqual(expectedState);
    expect(getSearchList).toHaveBeenCalledWith('John', []);
  });

  it('should handle FUZZY_SEARCH_DATA', () => {
    const mockFuzzySearchList = [{id: 1, name: 'Jane Doe', rank: 3}];
    getFuzzySearchList.mockReturnValue(mockFuzzySearchList);

    const action = {type: FUZZY_SEARCH_DATA, payload: 'Jane'};
    const initialStateWithData = {
      initialUserList: mockFuzzySearchList,
      searchedList: [],
    };
    const expectedState = {
      userData: {
        initialUserList: [],
        searchedList: mockFuzzySearchList,
      },
    };

    const newState = rootReducer(initialStateWithData, action);
    expect(newState).toEqual(expectedState);
    expect(getFuzzySearchList).toHaveBeenCalledWith('Jane', []);
  });

  it('should handle FILTER_NAME_ASC', () => {
    const initialStateWithData = {
      initialUserList: [
        {id: 1, name: 'Zoe', rank: 2},
        {id: 2, name: 'Anna', rank: 1},
      ],
      searchedList: [
        {id: 1, name: 'Zoe', rank: 2},
        {id: 2, name: 'Anna', rank: 1},
      ],
    };

    const action = {type: FILTER_NAME_ASC};
    const expectedState = {
      userData: {
        initialUserList: [],
        searchedList: [],
      },
    };

    const newState = rootReducer(initialStateWithData, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle FILTER_NAME_DESC', () => {
    const initialStateWithData = {
      ...initialState,
      searchedList: [
        {id: 1, name: 'Anna', rank: 1},
        {id: 2, name: 'Zoe', rank: 2},
      ],
    };

    const action = {type: FILTER_NAME_DESC};
    const expectedState = {
      userData: {
        initialUserList: [],
        searchedList: [],
      },
    };

    const newState = rootReducer(initialStateWithData, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle FILTER_RANK_LOWEST', () => {
    const initialUserList = Array.from({length: 2}, (_, index) => ({
      id: index,
      name: `User${index}`,
      rank: index + 1,
    }));

    const initialStateWithData = {
      ...initialState,
      initialUserList,
    };

    const action = {type: FILTER_RANK_LOWEST};
    const expectedState = {
      userData: {
        initialUserList: [],
        searchedList: [],
      },
    };

    const newState = rootReducer(initialStateWithData, action);
    expect(newState).toEqual(expectedState);
  });
});
