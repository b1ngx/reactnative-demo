/**
 * ToolbarAndroid
 * https://facebook.github.io/react-native/docs/toolbarandroid.html
 * @blng
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ToolbarAndroid
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <StatusBar
           backgroundColor="#176eb9"
           barStyle="light-content"
         />
        <Icon.ToolbarAndroid
          title={this.props.title}
          style={styles.toolbar}
          titleColor="#fff"
          actions={[
            { title: 'search', iconName: 'md-search', show: 'always' },
            { title: 'add', iconName: 'md-add', show: 'always' }
          ]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#1e8ae8'
  }
});
