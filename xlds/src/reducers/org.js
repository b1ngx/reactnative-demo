/**
 * user reducer
 */

import * as types from '../actions/types';

const initialState = {
  data: [],
  member: {}
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.LOADED_OGR:
      return {
        ...state,
        isLoaded: true,
        data: action.data
      };
    case types.LOADED_MEMBER:
      return {
        ...state,
        member: action.data
      };
    default:
      return state;
  }
}
