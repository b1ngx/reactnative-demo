/**
 * Created by BinG on 2016/7/1.
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

import { connect } from 'react-redux';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
  }
  componentDidMount() {
      const {dispatch, token} = this.props;
      console.log(token);
  }
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          navIcon={require('./img/back_white.png')}
          onIconClicked={this.dismiss}
          title="设置"
          titleColor="#ffffff"
          style={{height:56,backgroundColor: '#028ce5'}}>
        </ToolbarAndroid>

        <View style={styles.cells}>
          <View style={styles.cell}>
            <View><Text>姓名</Text></View>
            <View><Text>张丽霞</Text></View>
          </View>
          <View style={styles.cell}>
            <View><Text>身份证号</Text></View>
            <View><Text>411330198808088888</Text></View>
          </View>
        </View>
      </View>
    );
  }

  dismiss(){
    this.props.navigator.pop();
  }
}

function select(store) {
  return {
    token: store.login.token
  };
}

export default connect(select)(Setting);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedf1'
  },
  cells: {
    backgroundColor: '#fff',
    marginTop: 15
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',
    padding: 15,
  },
});
