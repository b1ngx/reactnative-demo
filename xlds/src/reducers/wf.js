/**
 * user reducer
 */

import * as types from '../actions/types';

const initialState = {
  applies: [],
  approves: [],
  types: [],
  wfs: [],
  wf: {}
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.RELOADED_APPLY:
      return {
        ...state,
        applies: action.data
      };
    case types.LOADED_APPLY:
      return {
        ...state,
        applies: state.applies.concat(action.data)
      };
    case types.RELOADED_APPROVE:
      return {
        ...state,
        approves: action.data
      };
    case types.LOADED_APPROVE:
      return {
        ...state,
        approves: state.approves.concat(action.data)
      };
    case types.LOADED_TYPE:
      return {
        ...state,
        types: action.data
      };
    case types.LOADED_LIST:
      return {
        ...state,
        wfs: action.data
      };
    case types.LOADED_WF:
      return {
        ...state,
        wf: action.data
      };
    default:
      return state;
  }
}
