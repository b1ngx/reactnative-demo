/**
 * user reducer
 */

import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  isLoginFail: false,
  apikey: null,
  msg: null,
  id: '',
  model: {}
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGGED_IN:
      console.log(action);
      return {
        isLoggedIn: true,
        apikey: action.data.Key,
        id: action.data.Id,
        companyId: action.data.Company,
        model: action.data
      };
    case types.LOGGED_OUT:
      return initialState;
    case types.LOGIN_FAIL:
      return {
        isLoginFail: true,
        msg: action.data
      };
    default:
      return state;
  }
}
