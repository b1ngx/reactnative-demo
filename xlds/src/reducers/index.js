/**
 * Created by BinG on 2016/9/1.
 */

import { combineReducers } from "redux";

import wf from './wf';
import org from './org';
import user from './user';
import announce from './announce';
import attendance from './attendance';

const appReducer = combineReducers({
  wf,
  org,
  user,
  announce,
  attendance
})

export default rootReducer = (state, action) => {
  if (action.type === 'LOGGED_OUT') {
    state = undefined
  }

  return appReducer(state, action)
}
