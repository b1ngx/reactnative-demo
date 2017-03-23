/**
 * Created by BinG on 2016/6/29.
 */

import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  account: null,
  token: null
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGGED_ING:
      return {
        isLoggeding: true
      };
    case types.LOGGED_IN:
      let {account, token} = action.data;
      return {
        isLoggedIn: true,
        account,
        token
      };
    case types.LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
}
