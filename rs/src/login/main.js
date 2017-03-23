/**
 * 72rs
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';

import { connect } from 'react-redux';
import {logOut} from '../actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onSelected = this.onSelected.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>

        <ToolbarAndroid
          title="社保服务"
          titleColor="#ffffff"
          actions={[{title: '设置', show: 'never'},{title: '退出账号', show: 'never'}]}
          onActionSelected={this.onSelected}
          style={styles.toolbar}>
        </ToolbarAndroid>

        <TouchableOpacity
          activeOpacity={0.9}>
          <View style={styles.status}>
            <Text style={styles.statusSubText}>参保状态</Text>
            <Text style={styles.statusText}>正常</Text>
          </View>
        </TouchableOpacity>


        <View style={styles.cells}>
          <TouchableHighlight
            onPress={this.onPress}
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)">
            <View style={styles.cell}>
              <Text style={styles.cellText}>养老保险</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onPress}
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)">
            <View style={styles.cell}>
              <Text style={styles.cellText}>医疗保险</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  onPress() {
    this.props.navigator.push({ details: true });
  }
  onSelected(index) {
    switch (index) {
      case 0:
        this.props.navigator.push({ setting: true });
        break;
      case 1:
        this.props.dispatch(logOut());
        this.props.navigator.resetTo({ login: true });
        break;
      default:
        break;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedf1',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#028ce5'
  },
  status: {
    // borderTopColor: '#35a3ea',
    // borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#028ce5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 160
  },
  statusSubText: {
    //color: '#a4cbf2',
    color: '#fff',
    fontSize: 16
  },
  statusText: {
    color: '#e6f0fb',
    fontSize: 32,
    marginTop: 10
  },
  cells: {
    marginTop: 15,
    backgroundColor: '#ffffff'
  },
  cell: {
    padding: 15,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0'
  },
  cellText: {
    fontSize: 16
  }
});

export default connect()(Main);
