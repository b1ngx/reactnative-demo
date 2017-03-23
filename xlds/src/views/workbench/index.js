/**
 * workbench
 * 工作台
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

import Icon from 'react-native-vector-icons/FontAwesome';
import Toolbar from '../../components/toolbar';
import JPushModule from 'jpush-react-native';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    JPushModule.addReceiveCustomMsgListener((message) => {
      console.log({pushMsg: message});
    });
    JPushModule.addReceiveNotificationListener((message) => {
      console.log("receive notification: " + message);
    });
  }

  componentWillUnmount() {
    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
  }

  render() {
    return (
      <View style={styles.container}>

        <Toolbar title="工作" />

        <View style={styles.cells}>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {
              this.props.navigator.push({
                attendance: true
              });
            }}>
            <View style={styles.cell}>
              <Image
                source={require('./img/wechat-kq.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>考勤</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {
              this.props.navigator.push({
                wf: true
              });
            }}>
            <View style={styles.cell}>
              <Image
                source={require('./img/wechat-sp.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>审批</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {
              this.props.navigator.push({
                announce: true
              })
            }}>
            <View style={styles.cell}>
              <Image
                source={require('./img/wechat-rb.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>公告</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {
              this.props.navigator.push({
                file: true
              })
            }}>
            <View style={styles.cell}>
              <Image
                source={require('./img/wechat-rb.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>文件</Text>
            </View>
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cells: {
    borderTopColor: '#eee',
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#ffffff'
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 14,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    color: '#4d4d4d',
    fontSize: 15,
    fontWeight: '500'
  },
  icon: {
    width: 49,
    height: 49,
    marginRight: 13
  }
});
