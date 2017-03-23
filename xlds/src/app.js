/**
 * xlds app
 */

import React, {Component} from 'react';
import {
  View
} from 'react-native';

import { connect } from 'react-redux';

import Login from './views/login';
import Tabbar from './views/tabbar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Tabbar />;
    }
    return (
      <Login />
    );
  }
}

function select(store) {
  return {
    isLoggedIn: store.user.isLoggedIn
  };
}

export default connect(select)(App);
