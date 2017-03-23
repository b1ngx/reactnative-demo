/**
 * app
 */

import React, {Component} from 'react';
import {
  View,
  Navigator,
  Platform,
  BackAndroid
} from 'react-native';

import { connect } from 'react-redux';
import Login from './login';
import Splash from './login/splash';
import Main from './login/main';
import Details from './login/details';
import Setting from './login/setting';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleBackPressed = this.handleBackPressed.bind(this);
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.handleBackPressed);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.handleBackPressed);
    }
  }

  handleBackPressed() {
    var navigator = this.refs.navigator;
    console.log(navigator.getCurrentRoutes());
    if (navigator && navigator.getCurrentRoutes().length > 2) {
      navigator.pop();
      return true;
    }

    return false;
  }

  renderScene(route, navigator) {
    if (route.main) {
      return (
        <Main navigator={navigator} />
      );
    }
    if (route.login) {
      return (
        <Login navigator={navigator} />
      );
    }
    if (route.details) {
      return (
        <Details navigator={navigator} />
      );
    }
    if (route.setting) {
      return (
        <Setting navigator={navigator} />
      );
    }
    return (
      <Splash navigator={navigator}/>
    );
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        configureScene={(route) => {
          if(route.main || route.login){
            return Navigator.SceneConfigs.FadeAndroid;
          }
          return Navigator.SceneConfigs.PushFromRight;
        }}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    );
  }
}
