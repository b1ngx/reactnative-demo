/*
 * 登录
*/

import * as types from './types';
import * as env from '../env';

const loadOrg = (key) => {

  return (dispatch) => {
    fetch(env.serverURL + key + '/Department?type=1')
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: types.LOADED_OGR,
        data: responseData.Content[0]
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

const loadMember = (key, id) => {

  return (dispatch) => {
    fetch(env.serverURL + key + '/Member/'+ id)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: types.LOADED_MEMBER,
        data: responseData
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

export { loadOrg, loadMember };
