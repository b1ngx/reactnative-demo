'use strict';

import React, {
  Component,
} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  AsyncStorage
} from 'react-native';

import { connect } from 'react-redux';
import {logOut} from '../../actions/login';

class Mine extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require('./img/avart.jpg')}
            style={styles.thumbnail}
          />
          <Text style={styles.name}>BinG</Text>
        </View>
        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <Image
                source={require('./img/update.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>检查更新</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <Image
                source={require('./img/feed.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>意见反馈</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <Image
                source={require('./img/setting.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>设置</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <Image
                source={require('./img/about.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>关于</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <Image
                source={require('./img/help.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>帮助</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => this.props.dispatch(logOut())}>
            <View style={styles.cell}>
              <Image
                source={require('./img/help.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>退出</Text>
            </View>
          </TouchableHighlight>
        </View>

      </ScrollView>
    );
  }

  logout() {
    /*AsyncStorage.removeItem('access_token',(err) => {
     if(err === null){
     //退出
     }
     });*/
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1,
    backgroundColor: '#ff843a',
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center'
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  name: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16
  },
  cells: {
    flex: 1,
    marginTop: 15,
    borderTopColor: '#eee',
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#ffffff'
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    flex: 1,
    color: '#333',
    fontWeight: '100',
    fontSize: 16
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10
  }
});

export default connect()(Mine);