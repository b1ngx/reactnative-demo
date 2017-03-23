/**
 * Created by BinG on 2016/6/29.
 */

import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  name: null,
  token: null
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGGED_IN:
      let {name, token} = action.data;
      return {
        isLoggedIn: true,
        name,
        tokens
      };
    case types.LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
}
