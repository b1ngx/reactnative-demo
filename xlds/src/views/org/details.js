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

import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { loadMember } from '../../actions/org';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.route.member);
    let {apikey, dispatch} = this.props;
    dispatch(loadMember(apikey, this.props.route.member.Id));
  }
  render() {
    let { member } = this.props;
    console.log(member);
    return (
      <View style={styles.container}>
        <Icon.ToolbarAndroid
          navIconName="md-arrow-back"
          onIconClicked={this.dismiss.bind(this)}
          style={styles.toolbar}
          titleColor="white"
          title="详细资料" />

        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={()=>{}}>
            <View style={{flex: 1, flexDirection: 'row', padding: 15, alignItems: 'center'}}>
              <Image source={{uri: member.Header}} style={styles.avart} />
              <View>
                <View style={{marginBottom: 6}}>
                  <Text style={{color: '#333'}}>{member.Name}</Text>
                </View>
                <Text style={{color: '#bbb'}}>{member.Position}</Text>
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
              <View style={styles.cell_primary}>
                <Text style={styles.text}>电话号码</Text>
              </View>
              <Text style={{color: '#576b95'}}>{member.PhoneNumber}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <View style={styles.cell_primary}>
                <Text style={styles.text}>邮箱</Text>
              </View>
              <Text style={{color: '#576b95'}}>{member.Email}</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.cells}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={() => {}}>
            <View style={styles.cell}>
              <View style={styles.cell_primary}>
                <Text style={styles.text}>部门</Text>
              </View>
              <Text style={styles.subText}>智业科技</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  dismiss() {
    this.props.navigator.pop();
  }
}

function select(store) {
  return {
    apikey: store.user.apikey,
    member: store.org.member
  };
}

export default connect(select)(Details);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  toolbar: {
    height:56,
    backgroundColor: '#1e8ae8'
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
    backgroundColor: '#fff'
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  cell_primary: {
    width: 100
  },
  text: {
    color: '#333'
  },
  subText: {
    color: '#999999',
  },
  icon: {
    marginRight: 15
  }
});
