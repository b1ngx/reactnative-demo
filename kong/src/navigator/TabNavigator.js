/**
 * Created by BinG on 2016/6/30.
 */

import React, {Component} from 'react';
import {
  View,
  Navigator,
  Platform,
  BackAndroid
} from 'react-native';

import Main from '../tabs/main';
import RewardView from '../tabs/reward/view'

export default class App extends Component {
  constructor(props) {
    super(props);
    this._backHandlers = [];
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

  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener
    };
  }

  addBackButtonListener(listener) {
    this._backHandlers.push(listener);
  }

  removeBackButtonListener(listener) {
    this._backHandlers = this._backHandlers.filter((handler) => handler !== listener);
  }

  handleBackPressed() {
    for (let i = this._backHandlers.length - 1; i >= 0; i--) {
      if (this._backHandlers[i]()) {
        return true;
      }
    }

    var navigator = this.refs.navigator;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    return false;
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }

          return Navigator.SceneConfigs.FloatFromBottom;

        }}
        initialRoute={{}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator) {
    if (route.reward) {
      return (
        <RewardView navigator={navigator} />
      );
    }
    return (
      <Main navigator={navigator}/>
    );
  }
}

App.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func
};