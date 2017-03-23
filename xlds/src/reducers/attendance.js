/**
 * user reducer
 */

import * as types from '../actions/types';

const initialState = {
  result: {},
  data: {}
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.KQ_PUNCH:
      return {
        ...state,
        result: action.data
      };
    case types.LOADED_KQ:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
