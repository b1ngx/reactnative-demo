/**
 * 72rs
 */

import React, {Component} from 'react';

import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import Splash from "./views/login/splash";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false}))
    };
  }
  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <Splash />
      </Provider>
    );
  }
}
