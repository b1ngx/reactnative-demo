/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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

import { connect } from 'react-redux';
import { loadMember } from '../../actions/org';

class Me extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.dispatch(loadMember(this.props.apikey, 'me'));
  }

  render() {
    let model = this.props.model;
    return (
      <View style={styles.container}>
        <Toolbar title="我" />

        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={this.profile.bind(this)}>
            <View style={{flex: 1, flexDirection: 'row', padding: 15, alignItems: 'center'}}>
              <Image source={{uri: model.Header}} style={styles.avart} />
              <View>
                <View style={{marginBottom: 6}}>
                  <Text style={{color: '#333'}}>{model.Name}</Text>
                </View>
                <Text style={{color: '#bbb'}}>{model.Description || model.Position}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <Icon name="wpforms" size={20} color="#757575"
                style={styles.icon} />
              <Text style={styles.text}>我的职责</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <Icon name="yoast" size={20} color="#757575"
                style={styles.icon} />
              <Text style={styles.text}>工作流程</Text>
            </View>
          </TouchableHighlight>
        </View>

        {/*<View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <View style={{marginRight: 20, flex: 1, width: 100}}>
                <Text style={styles.text}>我的职责</Text>
              </View>
              <Text style={{color: '#999', flex: 1}}>{model.Description}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <View style={{marginRight: 20, flex: 1, width: 100}}>
                <Text style={styles.text}>工作流程</Text>
              </View>
              <Text style={{color: '#999', flex: 1}}>{model.Workflow}</Text>
            </View>
          </TouchableHighlight>
        </View>*/}

        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={this.setting.bind(this)}>
            <View style={styles.cell}>
              <Icon name="cog" size={20} color="#757575"
                style={styles.icon} />
              <Text style={styles.text}>设置</Text>
            </View>
          </TouchableHighlight>
        </View>

        {/*<View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={this.onLogout.bind(this)}>
            <View style={styles.cell}>
              <Text style={{textAlign: 'center', color: '#ff5454'}}>注销</Text>
            </View>
          </TouchableHighlight>
        </View>*/}
      </View>
    );
  }

  profile() {
    this.props.navigator.push({
      'profile': true
    });
  }

  setting() {
    this.props.navigator.push({
      'setting': true
    });
  }

  onLogout() {
    this.props.dispatch(logOut());
  }
}

function select(store) {
  return {
    apikey: store.user.apikey,
    member: store.org.member,
    model: store.user.model
  };
}

export default connect(select)(Me);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  avart: {
    width: 64,
    height: 64,
    borderRadius: 60,
    marginRight: 15
  },
  cells: {
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
    color: '#4d4d4d',
    fontWeight: '100'
  },
  icon: {
    marginRight: 15
  }
});
