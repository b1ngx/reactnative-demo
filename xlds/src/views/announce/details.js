/**
 * wf
 * 审批
 * https://github.com/facebook/react-native/issues/505
 * android_asset => android/app/src/main/assets/
 * @blng
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Tab extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>

        <Icon.ToolbarAndroid
          navIconName="md-close"
          onIconClicked={()=>{this.props.navigator.pop()}}
          style={styles.toolbar}
          titleColor="white"
          title="通知公告"
          actions={[
            { title: 'Settings', iconName: 'md-share', show: 'always' }
          ]}
        />

        {/* <WebView
          source={{ uri: 'file:///android_asset/app.html' }}
          startInLoadingState={true} /> */}

        <WebView
          source={{ uri: 'http://t.cn/RcqLViB' }}
          startInLoadingState={true} />
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
    backgroundColor: '#1e8ae8'
  }
});
