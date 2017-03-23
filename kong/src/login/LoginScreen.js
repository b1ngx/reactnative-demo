/**
 * Created by BinG on 2016/6/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import {logIn} from '../actions/login';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '18703669600',
      password: '123456'
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <Text>云猎网</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(tel) => this.setState({tel})}
          value={this.state.username}
          placeholder={'手机号'}
        />

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(pwd) => this.setState({pwd})}
          value={this.state.password}
          placeholder={'密码'}
        />

        <View>
          <TouchableOpacity
            accessibilityTraits="button"
            onPress={this.login.bind(this)}
            activeOpacity={0.8}
            style={{height: 50}}>
            <View style={[styles.button, styles.buttonPrimary]}>
              <Text style={[styles.buttonText]}>
                登录
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
  login() {
    this.props.dispatch(logIn(this.state.username, this.state.password));
  }
}

var styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 40
  },
  buttonText: {
    letterSpacing: 1,
    fontSize: 14,
    color: '#ffffff'
  },
  buttonDefaultText: {
    color: '#6b6b76'
  },
  buttonPrimary: {
    borderColor: '#1eacc7',
    backgroundColor: '#1fbad6',
    marginRight: 10
  },
  buttonDefault: {
    borderColor: '#9d9da3',
    backgroundColor: '#ffffff',
    marginLeft: 10
  }
});

export default connect()(LoginScreen);