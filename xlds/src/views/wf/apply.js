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
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import moment from 'moment';
import { connect } from 'react-redux';
import { loadApply } from '../../actions/wf';

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
    dispatch(loadApply(apikey, type));
  }

  componentWillReceiveProps(nextProps) {
    let {apikey, dispatch, type} = this.props;
    if(nextProps.type != type){
      dispatch(loadApply(apikey, nextProps.type));
    }
  }

  render() {
    let {type, applies} = this.props;
    return (
      <View style={styles.cells}>
        <View style={{marginLeft: 5, marginBottom: 10, marginTop: 10}}>
          <Text style={{color: '#6e6e6e'}}>我的申请 > {Status[type]}</Text>
        </View>
        <ListView
          style={{backgroundColor: '#ffffff'}}
          enableEmptySections={true}
          dataSource={this.state.dataSource.cloneWithRows(applies)}
          renderRow={this.renderRow.bind(this)}
          onEndReachedThreshold={10}
          onEndReached={this.onEndReached.bind(this)}
        />
      </View>
    );
  }

  renderRow(x) {
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="rgb(236, 236, 236)"
        onPress={()=>{this.onPress(x)}}>
        <View style={styles.cell}>
          <View style={styles.icon}>
            <Icon name="md-notifications" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>{x.Name}</Text>
            <Text style={styles.textInfo}>{moment(x.DateTime).format('YYYY-MM-DD H:mm')}</Text>
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
      dispatch(loadApply(apikey, type, this.state.page));
    });
  }

  onPress(x) {
    this.props.navigator.push({
      wfdetails: true,
      Id: x.Id,
      Wid: x.Wid
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
    applies: store.wf.applies
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
    borderTopWidth: StyleSheet.hairlineWidth
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
    backgroundColor: '#ffc654',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
