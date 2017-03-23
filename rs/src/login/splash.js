/**
 * splash
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  InteractionManager
} from 'react-native';

import { connect } from 'react-redux';

class splash extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount() {
    const {navigator, dispatch, isLoggedIn} = this.props;
    setTimeout(() => {
      if (isLoggedIn) {
        navigator.push({ main: true });
      }else{
        navigator.resetTo({ login: true });
      }
    }, 2000);
  }
  render() {
    return (
      <Image
        style={styles.container}
        source={require('../img/splash.png')}>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
  }
});

function select(store) {
  return {
    isLoggedIn: store.login.isLoggedIn
  };
}

export default connect(select)(splash);
