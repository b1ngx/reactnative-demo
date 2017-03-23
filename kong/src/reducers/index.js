/**
 * Created by BinG on 2016/6/21.
 */

'use strict';

import { combineReducers } from "redux";

import reward from './reward';
import user from './user';

export default combineReducers({
  reward,
  user
});