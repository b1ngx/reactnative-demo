/**
 * Icon.ToolbarAndroid
 * https://github.com/oblador/react-native-vector-icons#toolbarandroid
 * @blng
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ToolbarAndroid
} from 'react-native';

export default class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Icon.ToolbarAndroid
        title="考勤"
        titleColor="black"
        navIconName="md-arrow-back"
        onIconClicked={()=>{}}
        style={styles.toolbar}
        actions={[
          { title: 'Settings', iconName: 'ios-stats', show: 'always' }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height:56,
    backgroundColor: '#ffffff'
  }
});
