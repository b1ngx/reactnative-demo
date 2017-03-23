/**
 * Created by BinG on 2016/6/30.
 */

import React, {Component} from 'react';
import {
  View,
  Platform,
  Navigator,
  BackAndroid
} from 'react-native';

import Tabbar from './views/tabbar';
import Org from './views/org';
import Contacts from './views/org/details';
import Profile from './views/me/profile';
import Setting from './views/me/setting';
import Attendance from './views/attendance';
import Stats from './views/attendance/stats';
import Wf from './views/wf';
import Wftype from './views/wf/type';
import Wfdetails from './views/wf/details';
import Announce from './views/announce';
import Announcement from './views/announce/details';
import File from './views/file';

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
          if(route.announcement){
            return Navigator.SceneConfigs.FadeAndroid;
          }
          return Navigator.SceneConfigs.PushFromRight;
        }}
        initialRoute={{}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator) {
    if (route.contacts) {
      return (
        <Contacts route={route} navigator={navigator} />
      );
    }
    if (route.org) {
      return (
        <Org route={route} navigator={navigator} />
      );
    }
    if (route.profile) {
      return (
        <Profile navigator={navigator} />
      );
    }
    if (route.setting) {
      return (
        <Setting navigator={navigator} />
      );
    }
    if(route.attendance){
      return (
        <Attendance navigator={navigator} />
      );
    }
    if(route.stats){
      return (
        <Stats navigator={navigator} />
      );
    }
    if(route.wf){
      return (
        <Wf navigator={navigator} />
      );
    }
    if(route.wftype){
      return (
        <Wftype navigator={navigator} />
      );
    }
    if(route.wfdetails){
      return (
        <Wfdetails route={route} navigator={navigator} />
      );
    }
    if(route.announce){
      return (
        <Announce navigator={navigator} />
      );
    }
    if(route.announcement){
      return (
        <Announcement navigator={navigator} />
      );
    }
    if(route.file){
      return (
        <File navigator={navigator} />
      );
    }
    return (
      <Tabbar navigator={navigator}/>
    );
  }
}
