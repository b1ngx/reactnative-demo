/**
 * Created by BinG on 2016/7/1.
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux';
import {fetchData} from '../actions/shebao';

class Details extends Component {

  constructor(props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
  }

  componentDidMount() {
      const {dispatch, token} = this.props;
      dispatch(fetchData(token, '4db170a81c064eed906f43e3a5f390f0'));
  }

  render() {
    const {data} = this.props;

    console.log(data);

    return (
      <View style={styles.container}>
        <ToolbarAndroid
          navIcon={require('./img/back_white.png')}
          onIconClicked={this.dismiss}
          title="养老保险"
          titleColor="#ffffff"
          //actions={[{title: '分享', icon: require('./img/share.png'), show: 'always'}]}
          style={{height:56,backgroundColor: '#028ce5'}}>
        </ToolbarAndroid>

        <View style={styles.cells}>
          <View style={styles.cell}>
            <View><Text>姓名</Text></View>
            <View><Text>{data.Realname}</Text></View>
          </View>
          <View style={styles.cell}>
            <View><Text>险种</Text></View>
            <View><Text>{data.CategoryName}</Text></View>
          </View>
          <View style={styles.cell}>
            <View><Text>单位</Text></View>
            <View><Text>{data.CompanyName}</Text></View>
          </View>
          <View style={styles.cell}>
            <View><Text>参保状态</Text></View>
            <View><Text>正常参保</Text></View>
          </View>
        </View>
      </View>
    );
  }

  dismiss(){
    this.props.navigator.pop();
  }
}

function select(store) {
  return {
    token: store.login.token,
    data: store.shebao.data
  };
}

export default connect(select)(Details);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedf1'
  },
  cells: {
    backgroundColor: '#fff',
    marginTop: 15
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',
    padding: 15,
  },
});
