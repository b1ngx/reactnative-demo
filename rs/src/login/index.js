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
  ToolbarAndroid
} from 'react-native';

import { connect } from 'react-redux';
import {logIn} from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '410822198503207033',
      password: '123456'
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const {isLoggedIn} = nextProps;
    if(isLoggedIn){
      nextProps.navigator.push({ main: true });
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <ToolbarAndroid
          title="账号登录"
          titleColor="#ffffff"
          style={{height:56,backgroundColor: '#028ce5'}}>
        </ToolbarAndroid>

        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              onChangeText={(account) => this.setState({account})}
              value={this.state.account}
              placeholder={'身份证号码'}
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              placeholder={'登录密码'}
            />
          </View>

          <TouchableOpacity
            accessibilityTraits="button"
            onPress={this.onLogin.bind(this)}
            activeOpacity={0.8}>
            <View style={styles.button}>
              <Text style={styles.caption}>
                登录
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
  onLogin(){
      this.props.dispatch(logIn(this.state.account, this.state.password));

  }
}

function select(store) {
  return {
    isLoggedIn: store.login.isLoggedIn
  };
}

export default connect(select)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F5FCFF',
  },
  form: {
    flex: 1,
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {

  },
  inputText: {
    height: 60,
    borderColor: '#e4e4e4',
    borderWidth: 1
  },
  button: {
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#028ce5',
    borderRadius: 2
  },
  caption: {
    fontSize: 16,
    color: '#fff',
  },
});
