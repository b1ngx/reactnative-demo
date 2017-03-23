/**
 * Created by BinG on 2016/6/1.
 */

import * as types from '../actions/types';

const initialState = {
  isFetching: true,
  isRefresh: false,
  isFinished: false,
  rewards: [],
  page: 1
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      };
    case types.REFRESH_DATA:
      return {
        ...state,
        isFetching: true,
        isRefresh: true,
        rewards: [],
        page: 1
      };
    case types.RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        isRefresh: false,
        rewards: state.rewards.concat(action.rewards),
        page: state.page + 1,
        isFinished: action.rewards < 5
      };
    default:
      return state;
  }
}