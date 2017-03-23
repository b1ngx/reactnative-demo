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
import { loadType, loadList } from '../../actions/wf';

class Wftype extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {apikey, companyId, dispatch} = this.props;
    dispatch(loadType(apikey, companyId));
    dispatch(loadList(apikey, companyId));
  }

  render() {
    let {types} = this.props;
    return (
      <View style={styles.container}>

        <Icon.ToolbarAndroid
          navIconName="md-arrow-back"
          onIconClicked={()=>{this.props.navigator.pop()}}
          style={styles.toolbar}
          titleColor="#fff"
          title="审批类型"
          actions={[
            { title: 'Settings', iconName: 'md-search', show: 'always' }
          ]}
        />

        <ScrollView>
          {types.map((x) => this.renderCells(x))}
        </ScrollView>

      </View>
    );
  }

  renderCells(x) {
    let data = this.props.wfs.filter(function(value){
      return value.TypeId == x.Id;
    });
    if(data.length){
      return (
        <View key={x.Id}>
          <View style={styles.cellsTitle}>
            <Text style={styles.cellsTitleText}>{x.TypeName}</Text>
          </View>
          <View style={styles.cells}>
            {data.map((x) => this.renderCell(x))}
          </View>
        </View>
      );
    }else{
      return null;
    }
  }

  renderCell(x) {
    return (
      <TouchableHighlight
        key={x.Id}
        activeOpacity={1}
        underlayColor="rgb(236, 236, 236)"
        onPress={() => {}}>
        <View style={styles.cell}>
          <View style={styles.icon}>
            <Icon name="md-notifications" size={20} color="#fff" />
          </View>
          <View>
            <Text style={styles.text}>{x.Name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

function select(store) {
  return {
    wfs: store.wf.wfs,
    types: store.wf.types,
    apikey: store.user.apikey,
    companyId: store.user.companyId
  };
}

export default connect(select)(Wftype);

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
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  icon: {
    width: 36,
    height: 36,
    marginRight: 15,
    backgroundColor: '#ffc654',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
