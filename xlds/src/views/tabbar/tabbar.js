/**
 * Custom tab bar
 * https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/examples/FacebookTabsExample/FacebookTabBar.js
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  }
  renderTabOption(tab, i) {
    const color = this.props.activeTab == i? "#0f88eb" : "#999999"; // 判断i是否是当前选中的tab，设置不同的颜色
    return (
      <TouchableOpacity
        key={tab.name}
        onPress={() => this.props.goToPage(i)}
        activeOpacity={1}
        style={styles.tab}>
        <View style={styles.tabItem}>
          <Icon name={tab.icon} color={color} size={24}/>
          <Text style={[styles.icon, {color: color}]}>
            {tab.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  tabs: {
    height: 54,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#d6d6d6',
    backgroundColor: '#fcfcfc'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});
