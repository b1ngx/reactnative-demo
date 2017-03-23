/**
 * Attendance Management
 * 打卡
 * @blng
 * https://github.com/xiaobuu/react-native-amap-location
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  ToastAndroid
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import AMapLocation from 'react-native-amap-location';

import { connect } from 'react-redux';
import { punch, init } from '../../actions/attendance';

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null
    };
  }
  componentDidMount() {
    this.listener = AMapLocation.addEventListener((data) => {
      this.setState({
        location: data
      });
    });
    AMapLocation.startLocation({
      accuracy: 'HighAccuracy',
      killProcess: true,
      needDetail: true,
    });
  }

  componentWillUnmount() {
    AMapLocation.stopLocation();
    this.listener.remove();
  }

  componentWillReceiveProps(nextProps) {
    var result = nextProps.result;
    if(result.Status === 0){
      result.Text = "你已经打过卡了";
    }
    ToastAndroid.show(result.Text, ToastAndroid.SHORT);
    this.props.dispatch(init());
  }

  render() {
    return (
      <View style={styles.container}>

        <Icon.ToolbarAndroid
          navIconName="md-arrow-back"
          onIconClicked={()=>{this.props.navigator.pop()}}
          style={styles.toolbar}
          titleColor="white"
          title="考勤"
          actions={[
            { title: '统计', iconName: 'ios-stats', show: 'always' }
          ]}
          onActionSelected={this.onActionSelected.bind(this)} />

        <ScrollView>
          <TouchableHighlight
            style={styles.section}
            key="shang"
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={this.onPunch.bind(this)}>
            <View style={styles.inner}>
              <View style={[styles.circle, styles.c1]}>
                <Text style={{color: '#fff', fontSize: 16}}>上</Text>
              </View>
              <View><Text style={{fontSize: 16}}>上班签到</Text></View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.section}
            key="xia"
            activeOpacity={1}
            underlayColor="rgb(236, 236, 236)"
            onPress={this.onPunch.bind(this)}>
            <View style={styles.inner}>
              <View style={[styles.circle, styles.c2]}>
                <Text style={{color: '#fff', fontSize: 16}}>下</Text>
              </View>
              <View><Text style={{fontSize: 16}}>下班签退</Text></View>
            </View>
          </TouchableHighlight>

        </ScrollView>
      </View>
    );
  }

  onPunch() {
    //var coords = '34.781826,113.672615';
    var coords = [this.state.location.latitude, ',', this.state.location.longitude].join('');
    this.props.dispatch(punch(this.props.apikey, coords));
  }

  onActionSelected(position) {
    this.props.navigator.push({
      stats: true
    });
  }
}

function select(store) {
  return {
    apikey: store.user.apikey,
    result: store.attendance.result
  };
}

export default connect(select)(Attendance);

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
  section: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 6,
    backgroundColor: '#fff'
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 240
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  c1: {
    backgroundColor: '#dfb741'
  },
  c2: {
    backgroundColor: '#439057'
  }
});
