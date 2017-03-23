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
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { loadDetails } from '../../actions/wf';

const ApprovalResult = {
  0 : '审批中',
  1 : '通过',
  2 : '未通过'
};

class Details extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {apikey, dispatch, route} = this.props;
    dispatch(loadDetails(apikey, route.Id, route.Wid, 0));
  }

  render() {
    let { wf } = this.props;
    if(wf.Model){
      return (
        <View style={styles.container}>

          <Icon.ToolbarAndroid
            navIconName="md-arrow-back"
            onIconClicked={()=>{this.props.navigator.pop()}}
            style={styles.toolbar}
            titleColor="#fff"
            title="审批详情"
          />

          <ScrollView>
            <View style={styles.cells}>
              <View style={styles.cell}>
                <Text style={styles.text}>申请事项</Text>
                <Text style={styles.textInfo}>{wf.Model.Wf.Name}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>申请人</Text>
                <Text style={styles.textInfo}>{wf.Model.Owner.Name}</Text>
              </View>
              {wf.Model.Wf.WfForm.map((x) => this.renderWfForm(x))}
              <View style={styles.cell}>
                <Text style={styles.text}>审批结果</Text>
                <Text style={styles.textInfo}>{ApprovalResult[wf.Model.Wf.ApprovalResult]}</Text>
              </View>
            </View>

            <View style={styles.cellsTitle}>
              <Text style={styles.cellsTitleText}>审批流程</Text>
            </View>
            <View style={styles.cells}>
              {wf.Model.WorkflowProcess.map((x) => this.renderProcess(x))}
            </View>
          </ScrollView>

        </View>
      );
    }else{
      return null;
    }

  }

  renderWfForm(x) {
    return (
      <View style={styles.cell} key={x.Id}>
        <Text style={styles.text}>{x.Text}</Text>
        <Text style={styles.textInfo}>{x.Value}</Text>
      </View>
    );
  }

  renderProcess(x) {
    return (
      <View style={styles.cell} key={x.Id}>
        <Text style={styles.textInfo}>{x.Name}</Text>
      </View>
    );
  }

}

function select(store) {
  return {
    wf: store.wf.wf,
    apikey: store.user.apikey
  };
}

export default connect(select)(Details);

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
    backgroundColor: '#ffffff',
    marginTop: 15,
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
  }
});
