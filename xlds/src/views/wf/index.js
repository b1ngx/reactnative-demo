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
  ToolbarAndroid,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Apply from './apply';
import Approve from './approve';

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: -1
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>

        <Icon.ToolbarAndroid
          navIconName="md-arrow-back"
          onIconClicked={()=>{this.props.navigator.pop()}}
          style={styles.toolbar}
          titleColor="#fff"
          title="审批"
          actions={[
            { title: 'Settings', iconName: 'md-add', show: 'always' },
            { title: '未处理', show: 'never' },
            { title: '已通过', show: 'never' },
            { title: '未通过', show: 'never' }
          ]}
          onActionSelected={this.onActionSelected.bind(this)} />

        <ScrollableTabView
          tabBarBackgroundColor="#1e8ae8"
          tabBarUnderlineColor="#ffffff"
          tabBarActiveTextColor="#ffffff"
          tabBarInactiveTextColor="#98c9f4"
          tabBarBorderBottomColor="#1e8ae8" >
            <Apply tabLabel="我的申请" {...this.props} type={this.state.type} />
            <Approve tabLabel="我的审批" {...this.props} type={this.state.type} />
        </ScrollableTabView>

      </View>
    );
  }

  onActionSelected(position) {
    if(position === 0){
      return this.props.navigator.push({
        wftype: true
      });
    }
    this.setState({type: position -1});
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
    backgroundColor: '#1e8ae8'
  }
});
