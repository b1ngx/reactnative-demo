/**
 * 文件
 * @blng
 * https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/index.js
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import File from './file';
import Shared from './shared';

export default class Tab extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar
           backgroundColor="#274576"
           barStyle="light-content"
         />
        <Icon.ToolbarAndroid
          navIconName="md-arrow-back"
          onIconClicked={()=>{this.props.navigator.pop()}}
          style={styles.toolbar}
          titleColor="#fff"
          title="文件管理"
          actions={[
            { title: 'Settings', iconName: 'md-add', show: 'always' }
          ]} />

        <ScrollableTabView
          tabBarBackgroundColor="#274576"
          tabBarUnderlineColor="#677c9f"
          tabBarActiveTextColor="#e2e6ed"
          tabBarInactiveTextColor="#9ba9c0"
          tabBarBorderBottomColor="#274576" >
            <File tabLabel="文件" />
            <Shared tabLabel="共享" />
        </ScrollableTabView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    flexDirection: 'column'
  },
  toolbar: {
    height:56,
    backgroundColor: '#274576'
  }
});
