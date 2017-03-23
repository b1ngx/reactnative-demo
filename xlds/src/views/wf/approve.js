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
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import moment from 'moment';
import { connect } from 'react-redux';
import { loadApprove } from '../../actions/wf';

const Status = {
  '-1': '全部',
  0: '未处理',
  1: '已通过',
  2: '未通过'
};

class WF extends Component {
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
    let {apikey, dispatch, type} = this.props;
    dispatch(loadApprove(apikey, type));
  }

  componentWillReceiveProps(nextProps) {
    let {apikey, dispatch, type} = this.props;
    if(nextProps.type != type){
      dispatch(loadApprove(apikey, nextProps.type));
    }
  }

  render() {
    let {type, approves} = this.props;
    return (
      <View style={styles.cells}>
        <View style={{marginLeft: 5, marginBottom: 10, marginTop: 10}}>
          <Text style={{color: '#6e6e6e'}}>我的审批 > {Status[type]}</Text>
        </View>
        <ListView
          style={{backgroundColor: '#ffffff'}}
          enableEmptySections={true}
          dataSource={this.state.dataSource.cloneWithRows(approves)}
          renderRow={this.renderRow.bind(this)}
          onEndReachedThreshold={10}
          onEndReached={this.onEndReached.bind(this)}
        />
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
          <View>
            <Image source={{uri: obj.MemberHeader}} style={styles.icon}/>
          </View>
          <View>
            <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>{obj.Name}</Text>
            <Text style={styles.textInfo}>{moment(obj.DateTime).format('YYYY-MM-DD H:mm')}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  onEndReached() {
    let { apikey, dispatch, type } = this.props;
    this.setState(function(state, props) {
      return {page: state.page + 1};
    }, function(){
      dispatch(loadApprove(apikey, type, this.state.page));
    });
  }

  onPress() {
    this.props.navigator.push({
      wfdetails: true
    })
  }

  onActionSelected() {
    this.props.navigator.push({
      wftype: true
    });
  }
}

function select(store) {
  return {
    id: store.user.id,
    apikey: store.user.apikey,
    approves: store.wf.approves
  };
}

export default connect(select)(WF);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    flexDirection: 'column'
  },
  toolbar: {
    height:56,
    backgroundColor: '#ffffff'
  },
  cells: {
    flex: 1,
    borderTopColor: '#eee',
    borderTopWidth: StyleSheet.hairlineWidth,
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
    fontSize: 14,
    color: '#212121'
  },
  textInfo: {
    color: '#747474'
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 15,
    // backgroundColor: '#ffc654',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
