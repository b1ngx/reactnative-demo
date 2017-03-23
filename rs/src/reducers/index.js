'use strict';

import { combineReducers } from "redux";

import user from './user';
import login from './login';
import shebao from './shebao';

export default combineReducers({
  user,
  login,
  shebao
});
