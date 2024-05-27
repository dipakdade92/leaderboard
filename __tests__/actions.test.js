import configureMockStore from 'redux-mock-store';
import * as actions from '../src/redux/action';
// import thunk from 'redux-thunk';
import {
  FILTER_NAME_ASC,
  FILTER_NAME_DESC,
  FILTER_RANK_LOWEST,
  GET_DATA,
  SEARCH_DATA,
  FUZZY_SEARCH_DATA,
} from '../src/redux/types';

// const middlewares = [thunk];
const mockStore = configureMockStore();

describe('Redux Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should create an action to get initial user data', () => {
    const expectedAction = {type: GET_DATA};
    expect(actions.setInitialUserData()).toEqual(expectedAction);
  });

  it('should create an action to get searched user data', () => {
    const name = 'John Doe';
    const expectedAction = {type: SEARCH_DATA, payload: name};
    expect(actions.getSearchedUserData(name)).toEqual(expectedAction);
  });

  it('should create an action to filter user list by ascending name', () => {
    const expectedAction = {type: FILTER_NAME_ASC};
    expect(actions.getUserListByAscName()).toEqual(expectedAction);
  });

  it('should create an action to filter user list by descending name', () => {
    const expectedAction = {type: FILTER_NAME_DESC};
    expect(actions.getUserListByDescName()).toEqual(expectedAction);
  });

  it('should create an action to filter user list by lowest rank', () => {
    const expectedAction = {type: FILTER_RANK_LOWEST};
    expect(actions.getUserListByLowestRank()).toEqual(expectedAction);
  });

  it('should create an action to get fuzzy searched user data', () => {
    const name = 'Jane Doe';
    const expectedAction = {type: FUZZY_SEARCH_DATA, payload: name};
    expect(actions.getFuzzySearchedUserData(name)).toEqual(expectedAction);
  });
});
