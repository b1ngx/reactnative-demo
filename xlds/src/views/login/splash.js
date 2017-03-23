import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import codePush from "react-native-code-push";

import Login from './index';
import Navigator from '../../navigator';

class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);

    codePush.sync({ updateDialog: {
        title: '更新',
        optionalInstallButtonLabel: '安装',
        optionalIgnoreButtonLabel: '忽略',
        optionalUpdateMessage: '有一个更新'
      },
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }

  render() {
    if(this.state.isLoading){
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <Image source={require('./img/logo.png')} style={styles.logo}/>
          <Text style={styles.slogan}>
            大数据和移动信息化研究中心
          </Text>
        </View>
      );
    }else{
      if (this.props.isLoggedIn) {
        return <Navigator />;
      }
      return (
        <Login />
      );
    }
  }
}

function select(store) {
  return {
    isLoggedIn: store.user.isLoggedIn
  };
}

export default connect(select)(Splash);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  logo: {
    width: 200,
    height: 37
  },
  slogan: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10
  }
});
