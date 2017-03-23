/**
 * 72rs
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToolbarAndroid,
  StatusBar,
  ToastAndroid
} from 'react-native';

import { connect } from 'react-redux';
import {logIn, logOut} from '../../actions/user';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      isLoading: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isLoginFail == true){
      ToastAndroid.show(nextProps.msg, ToastAndroid.SHORT);
      this.props.dispatch(logOut());
      this.setState({isLoading: false});
    }
  }

  render() {
    return (
      <View style={styles.container}>

        {/*
          <StatusBar
            backgroundColor="#22a3f6"
            barStyle="light-content"
          />

          <ToolbarAndroid
            title="账号登录"
            titleColor="#ffffff"
            style={{height:56, backgroundColor: '#22a3f6'}}>
          </ToolbarAndroid>
        */}

        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              onChangeText={(account) => this.setState({account})}
              value={this.state.account}
              placeholder={'邮箱'}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              placeholder={'密码'}
              secureTextEntry={true}
            />
          </View>
        </View>

        <TouchableOpacity
          accessibilityTraits="button"
          onPress={this.onLogin.bind(this)}
          activeOpacity={0.8}>
          <View style={styles.button}>
            <Text style={styles.caption}>
              {this.state.isLoading ? '登录中...' : '登录'}
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
  onLogin(){
    if(!this.state.account){
      ToastAndroid.show('请输入邮箱', ToastAndroid.SHORT);
      return;
    }
    if(!this.state.password){
      ToastAndroid.show('请输入密码', ToastAndroid.SHORT);
      return;
    }
    this.setState({isLoading: true});
    this.props.dispatch(logIn(this.state.account, this.state.password));
  }
}

function select(store) {
  return {
    isLoginFail: store.user.isLoginFail,
    msg: store.user.msg
  };
}

export default connect(select)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  form: {
    marginTop: 50,
    backgroundColor: '#ffffff'
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f5f5f5'
  },
  inputText: {
    height: 60,
    backgroundColor: 'transparent',
  },
  button: {
    height: 50,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22a3f6',
    //borderRadius: 25
  },
  caption: {
    fontSize: 16,
    color: '#fff',
  }
});
