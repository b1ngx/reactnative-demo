/**
 * 文件
 * @blng
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Tab extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.cells}>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor="rgb(236, 236, 236)"
          onPress={() => {}}>
          <View style={styles.cell}>
            <View style={styles.icon}>
              <Icon name="folder" size={20} color="#fff" />
            </View>
            <View>
              <Text style={styles.text}>项目文件</Text>
              <Text style={styles.textInfo}>1项  2016.8.27</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor="rgb(236, 236, 236)"
          onPress={() => {}}>
          <View style={styles.cell}>
            <View style={[styles.icon, {backgroundColor: '#33c8ba'}]}>
              <Icon name="file" size={20} color="#fff" />
            </View>
            <View>
              <Text style={styles.text}>文本文件</Text>
              <Text style={styles.textInfo}>55.2kB  2016.8.27</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cells: {
    marginTop: 15,
    borderTopColor: '#eee',
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#ffffff'
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    color: '#212121'
  },
  textInfo: {
    color: '#747474'
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 15,
    backgroundColor: '#ffc654',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
