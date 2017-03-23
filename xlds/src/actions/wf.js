/*
 * 公告
*/

import * as types from './types';
import * as env from '../env';

const loadApply = (key, type, page) => {
  console.log();
  return (dispatch) => {
    fetch(env.serverURL + key + '/Wf/MyApplyList/0?type='+ type +'&page=' + page || 1)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: page ? types.LOADED_APPLY : types.RELOADED_APPLY,
        data: responseData.Content
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

const loadApprove = (key, type, page) => {
  return (dispatch) => {
    fetch(env.serverURL + key + '/Wf/ApproveList/0?type='+ type +'&page=' + page || 1)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: page ? types.LOADED_APPROVE : types.RELOADED_APPROVE,
        data: responseData.Content
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

const loadType = (key, id) => {
  return (dispatch) => {
    fetch(env.serverURL + key + '/WfType/list/' + id)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: types.LOADED_TYPE,
        data: responseData.Content
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

const loadList = (key, id) => {
  return (dispatch) => {
    fetch(env.serverURL + key + '/workflow/list/' + id + '?type=1')
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: types.LOADED_LIST,
        data: responseData.Content
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

const loadDetails = (key, id, wid, type) => {
  return (dispatch) => {
    fetch(env.serverURL + key + '/Wf/Detail/' + id + '?wid='+ wid +'&type=' + type)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: types.LOADED_WF,
        data: responseData.Content
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

export { loadApply, loadApprove, loadType, loadList, loadDetails };
