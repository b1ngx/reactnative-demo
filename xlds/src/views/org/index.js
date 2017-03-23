/**
 * Organization
 * 组织架构
 * @blng
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import { loadOrg } from '../../actions/org';

import Font from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Toolbar from '../../components/toolbar';

class Org extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let {route, apikey, dispatch} = this.props;
    if(!route){
      dispatch(loadOrg(apikey));
    }
  }
  render() {
    let { route, data } = this.props;

    if(route){
      data = route.data;
    }

    return (
      <View style={styles.container}>
        {route ? this.renderToolbar(data.Name) : (<Toolbar title="通讯录" />)}
        <ScrollView>
          <View style={styles.cells}>
            {data.Members && data.Members.map((member) => this.renderMember(member))}
            {data.Children && data.Children.map((depart) => this.renderDepart(depart))}
          </View>
        </ScrollView>
      </View>
    );
  }
  renderToolbar(name) {
    return (
      <Icon.ToolbarAndroid
        navIconName="md-arrow-back"
        onIconClicked={this.back.bind(this)}
        style={styles.toolbar}
        titleColor="white"
        title={name} />
    )
  }
  renderMember(member){
    return (
      <TouchableHighlight
        key={member.Id}
        activeOpacity={1}
        underlayColor="rgb(236, 236, 236)"
        onPress={()=>this.onPress(member)}>
        <View style={styles.cell}>
          <Image
            source={{uri: member.Header}}
            style={styles.icon}
          />
          <Text style={styles.text}>{member.Name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  renderDepart(depart){
    return (
      <TouchableHighlight
        key={depart.Id}
        activeOpacity={1}
        underlayColor="rgb(236, 236, 236)"
        onPress={()=>this.list(depart)}>
        <View style={styles.cell}>
          <Font name="folder" size={36} color="#757575"
            style={{marginRight: 15}} />
          <Text style={styles.text}>{depart.Name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  onPress(member) {
    this.props.navigator.push({
      contacts: true,
      member: member
    });
  }

  list(department) {
    this.props.navigator.push({
      org: true,
      data: department
    });
  }

  back() {
    this.props.navigator.pop();
  }
}

function select(store) {
  return {
    apikey: store.user.apikey,
    data: store.org.data
  };
}

export default connect(select)(Org);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  toolbar: {
    height:56,
    backgroundColor: '#1e8ae8'
  },
  cells: {
    marginBottom: 10,
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
    color: '#4d4d4d'
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 15
  }
});
