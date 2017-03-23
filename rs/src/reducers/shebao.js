/**
 * Created by BinG on 2016/6/29.
 */

import * as types from '../actions/types';

const initialState = {
  isFetching: true,
  data: null
};

export default function shebao(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_DATA:
      return initialState;
    case types.RECEIVE_DATA:
      return {
        isFetching: false,
        data: action.data
      };
    default:
      return state;
  }
}
