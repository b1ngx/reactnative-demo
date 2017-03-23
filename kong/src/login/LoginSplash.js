/**
 * Created by BinG on 2016/6/21.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Login from './LoginScreen';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Image
        style={styles.container}
        source={require('./img/splash.png')}>

        <View style={[styles.buttonGroup]}>

          <TouchableOpacity
            accessibilityTraits="button"
            onPress={this.onLogin.bind(this)}
            activeOpacity={0.8}
            style={{height: 50, flex:1}}>
            <View style={[styles.button, styles.buttonPrimary]}>
              <Text style={[styles.buttonText]}>
                登录
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityTraits="button"
            onPress={this.props.onPress}
            activeOpacity={0.8}
            style={{height: 50, flex:1}}>
            <View style={[styles.button, styles.buttonDefault]}>
              <Text style={[styles.buttonText, styles.buttonDefaultText]}>
                注册
              </Text>
            </View>
          </TouchableOpacity>

        </View>

      </Image>
    );
  }
  onLogin(){
    this.props.navigator.push({ login: true })
  }
  register(){

  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 26,
    width: undefined,
    height: undefined
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 2
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