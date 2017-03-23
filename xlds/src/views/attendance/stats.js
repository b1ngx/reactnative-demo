/**
 * Attendance Management
 * 统计
 * @blng
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Calendar from 'react-native-calendar';

import { connect } from 'react-redux';
import { loadAttendance } from '../../actions/attendance';

const DayHeadings = ['日', '一', '二', '三', '四', '五', '六'];
const MonthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const Status = {
  "-3": "调休",
  "-2": "未入职",
  "-1": "已离职",
  0:"缺勤",
  1:"请假",
  2:"正常",
  3:"迟到",
  4:"早退",
  5:"未打卡",
  6:"外勤"
};

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: {}
    };
  }

  componentDidMount() {
    let { apikey, id, dispatch} = this.props;
    dispatch(loadAttendance(apikey, id, '2016/9'));
  }

  eventDates(data) {
    var dates = [];
    data = data || [];
    for (var obj of data) {
      if(obj.IsValidOn && obj.IsValidOff){
        dates.push(moment(obj.OnWorkTime).format('YYYY-MM-DD'));
      }
    }
    return dates;
  }

  render() {
    return (
      <View style={styles.container}>

        <Icon.ToolbarAndroid
          navIconName="md-arrow-back"
          onIconClicked={()=>{this.props.navigator.pop()}}
          style={styles.toolbar}
          titleColor="white"
          title="统计"
          />

        <Calendar
          ref="calendar"
          eventDates={this.eventDates(this.props.data.Attendances)}
          dayHeadings={DayHeadings}
          monthNames={MonthNames}
          titleFormat={'YYYY/M'}
          showControls={true}
          prevButtonText={'<'}
          nextButtonText={'>'}
          onTouchPrev={this.onTouchPrev.bind(this)}
          onTouchNext={this.onTouchNext.bind(this)}
          onDateSelect={this.onDateSelect.bind(this)}
        />

        { this.renderStats() }
        { this.renderFooter() }

      </View>
    );
  }

  onTouchPrev(date) {
    let { apikey, id, dispatch} = this.props;
    dispatch(loadAttendance(apikey, id, date.format('YYYY/MM')));
  }

  onTouchNext(date) {
    // bug: 超过当前月份返回数据有误，下一月不能大于当前月;
    let { apikey, id, dispatch} = this.props;
    dispatch(loadAttendance(apikey, id, date.format('YYYY/MM')));
  }

  renderFooter() {
    let x = this.state.selectedData;
    if(x.OnTime){
      return (
        <View>
          <View style={styles.cellsTitle}>
            <Text style={styles.cellsTitleText}>考勤情况</Text>
          </View>
          <View style={styles.cells}>
            <View style={styles.cell}>
              <Text style={styles.text}>上班</Text>
              <Text style={this.toColor(x.OnStatus)}>{this.toStatus(x.OnStatus)}</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.text}>下班</Text>
              <Text style={this.toColor(x.OffStatus)}>{this.toStatus(x.OffStatus)}</Text>
            </View>
          </View>
        </View>
      );
    }else{
      return null;
    }
  }

  renderStats() {
    let { data } = this.props;
    return (
      <View>
        <View style={styles.cellsTitle}>
          <Text style={styles.cellsTitleText}>考勤统计</Text>
        </View>
        <View style={styles.cells1}>
          <View>
            <Text style={styles.text}>考勤</Text>
            <Text style={styles.textInfo}>{data.ShouldDays}</Text>
          </View>
          <View>
            <Text style={styles.text}>出勤</Text>
            <Text style={styles.textInfo}>{data.RealDays}</Text>
          </View>
          <View>
            <Text style={styles.text}>请假</Text>
            <Text style={styles.textInfo}>{data.DayOffs}</Text>
          </View>
          <View>
            <Text style={styles.text}>迟到</Text>
            <Text style={styles.textInfo}>{data.LateDays}</Text>
          </View>
          <View>
            <Text style={styles.text}>早退</Text>
            <Text style={styles.textInfo}>{data.EarlyDays}</Text>
          </View>
          <View>
            <Text style={styles.text}>旷工</Text>
            <Text style={{color: 'red'}}>{data.Absenteeism}</Text>
          </View>
        </View>
      </View>
    );
  }

  toStatus(x){
    // if(x.IsVacation){
    //   return '假期';
    // }
    // moment(x.OnWorkTime).format('YYYY/MM/DD')
    return Status[x];
  }

  toColor(x) {
    if(x == 0 || x == 4){
      return styles.textDanger
    }
    if(x == 1 || x== 3 || x == 5){
      return styles.textWarn;
    }
    return styles.textInfo;
  }

  onDateSelect(date) {
    var day = moment(date).date();

    for (var x of this.props.data.Attendances) {
      if(x.Day == day){
        this.setState({
          selectedData: x
        });
        break;
      }
    }
  }

}

function select(store) {
  return {
    apikey: store.user.apikey,
    id: store.user.id,
    data: store.attendance.data
  };
}

export default connect(select)(Stats);

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
  cellsTitle: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 5
  },
  cellsTitleText: {
    color: '#888'
  },
  cells: {
    borderTopColor: '#eee',
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#ffffff'
  },
  cells1: {
    borderTopColor: '#eee',
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 15
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  textDanger: {
    color: 'red'
  },
  textWarn: {
    color: '#f0ad4e'
  }
});
