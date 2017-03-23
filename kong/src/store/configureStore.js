/*
 * store
 */

import {
  AsyncStorage
} from 'react-native';
import {createStore, applyMiddleware} from "redux";
import { persistStore, autoRehydrate } from 'redux-persist';
import thunkMiddleware from "redux-thunk";
import createLogger from 'redux-logger';
import reducers from "../reducers";

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

var createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

export default function configureStore(onComplete = (() =>{})) {

  const store = autoRehydrate()(createStoreWithMiddleware)(reducers);
  persistStore(store, {storage: AsyncStorage}, onComplete);

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
