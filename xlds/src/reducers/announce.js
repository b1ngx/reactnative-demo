/**
 * user reducer
 */

import * as types from '../actions/types';

const initialState = {
  data: []
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.REFRESH_ANNOUNCE:
      return {
        ...state,
        data: action.data
      };
    case types.LOADED_ANNOUNCE:
      return {
        ...state,
        data: state.data.concat(action.data)
      };
    default:
      return state;
  }
}
