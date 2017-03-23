/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { logOut } from '../../actions/user';

class Setting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>

        <Icon.ToolbarAndroid
          navIconName="md-arrow-back"
          onIconClicked={this.dismiss.bind(this)}
          style={styles.toolbar}
          titleColor="white"
          title="设置" />

        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <View style={{flex: 1}}>
                <Text style={styles.text}>版本</Text>
              </View>
              <View>
                <Text style={styles.text}>1.0.1</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <View style={{flex: 1}}>
                <Text style={styles.text}>关于</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={this.onLogout.bind(this)}>
            <View style={styles.cell}>
              <View style={{flex: 1}}>
                <Text style={styles.text}>退出</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

  dismiss() {
    this.props.navigator.pop();
  }

  onLogout() {
    this.props.dispatch(logOut());
  }

}

function select(store) {
  return {
    model: store.user.model
  };
}

export default connect(select)(Setting);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  toolbar: {
    height:56,
    backgroundColor: '#1e8ae8'
  },
  avart: {
    width: 64,
    height: 64,
    borderRadius: 60
  },
  cells: {
    marginTop: 15,
    borderTopColor: '#eee',
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#ffffff'
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15
  },
  text: {
    flex: 1,
    color: '#4d4d4d',
    fontWeight: '100'
  },
  icon: {
    marginRight: 15
  }
});
