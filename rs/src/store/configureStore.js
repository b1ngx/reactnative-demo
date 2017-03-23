/*
 * store
 */

import {
  AsyncStorage
} from 'react-native';

import {createStore, applyMiddleware} from "redux";
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk';

import reducers from "../reducers";

export default function configureStore(onComplete = (() =>{})) {

  const store = createStore(reducers, applyMiddleware(thunk), autoRehydrate())
  persistStore(store, {storage: AsyncStorage}, onComplete);

  return store;
}
