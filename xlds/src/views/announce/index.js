/**
 * wf
 * 审批
 * @blng
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import moment from 'moment';
import { connect } from 'react-redux';
import { load } from '../../actions/announce';

class Announce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      page: 1
    };
  }

  componentDidMount() {
    let { apikey, id, dispatch } = this.props;
    dispatch(load(apikey, id));
  }

  render() {
    return (
      <View style={styles.container}>

        <Icon.ToolbarAndroid
          navIconName="md-arrow-back"
          onIconClicked={()=>{this.props.navigator.pop()}}
          style={styles.toolbar}
          titleColor="#fff"
          title="通知公告" />

        <View style={styles.cells}>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource.cloneWithRows(this.props.data)}
            renderRow={this.renderRow.bind(this)}
            onEndReachedThreshold={10}
            onEndReached={this.onEndReached.bind(this)}
          />
        </View>

      </View>
    );
  }

  renderRow(obj) {
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="rgb(236, 236, 236)"
        onPress={this.onPress.bind(this)}>
        <View style={styles.cell}>
          <View style={styles.icon}>
            <Icon name="md-notifications" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>{obj.Title}</Text>
            <Text style={styles.textInfo}>{moment(obj.CreateDateTime).format('YYYY-MM-DD H:mm')}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  onEndReached() {
    let { apikey, id, dispatch } = this.props;
    this.setState(function(state, props) {
      return {page: state.page + 1};
    }, function(){
      dispatch(load(apikey, id, this.state.page));
    });
  }

  onPress() {
    this.props.navigator.push({
      announcement: true
    })
  }
}

function select(store) {
  return {
    id: store.user.id,
    apikey: store.user.apikey,
    data: store.announce.data
  };
}

export default connect(select)(Announce);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    flexDirection: 'column'
  },
  toolbar: {
    height:56,
    backgroundColor: '#1e8ae8'
  },
  cells: {
    flex: 1,
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
    fontSize: 15,
    color: '#212121'
  },
  textInfo: {
    color: '#747474',
    fontSize: 12
  },
  icon: {
    width: 49,
    height: 49,
    marginRight: 15,
    backgroundColor: '#ffc654',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
