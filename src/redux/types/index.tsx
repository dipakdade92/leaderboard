export const GET_DATA = 'GET_DATA';
export const SEARCH_DATA = 'SEARCH_DATA';
export const FILTER_NAME_ASC = 'FILTER_NAME_ASC';
export const FILTER_NAME_DESC = 'FILTER_NAME_DESC';
export const FILTER_RANK_LOWEST = 'FILTER_RANK_LOWEST';
export const FUZZY_SEARCH_DATA = 'FUZZY_SEARCH_DATA';

export interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
}

export interface FlagType {
  flag: boolean;
}

export interface WidthType {
  width: string;
}

export interface ButtonProps {
  width?: string;
  buttonText: string;
  onClickButton: () => void;
}

export interface ListItemProps {
  item: UserDataType;
  userName: string;
}

export interface UserDataType {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  rank?: number;
}

export interface GetUserData {
  type: typeof GET_DATA;
}

export interface GetSearchedUsersData {
  type: typeof SEARCH_DATA;
  payload: string;
}

export interface GetUserByAscName {
  type: typeof FILTER_NAME_ASC;
}

export interface GetUserByDescName {
  type: typeof FILTER_NAME_DESC;
}

export interface GetUserByLowestRank {
  type: typeof FILTER_RANK_LOWEST;
}
