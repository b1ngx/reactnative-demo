/**
 * Created by BinG on 2016/6/1.
 */

import React, {Component} from 'react';
import {
  View
} from 'react-native';

import { connect } from 'react-redux';
import Navigator from './navigator/F8Navigator';
import TabNavigator from './navigator/TabNavigator';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isLoggedIn) {
      return <TabNavigator />;
    }
    return (
      <Navigator />
    );
  }
}

function select(store) {
  return {
    isLoggedIn: store.user.isLoggedIn
  };
}

export default connect(select)(App);