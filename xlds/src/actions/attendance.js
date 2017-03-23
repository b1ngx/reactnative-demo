/*
 * 登录
*/

import * as types from './types';
import * as env from '../env';

const punch = (key, coords) => {

  return (dispatch) => {
    fetch(env.serverURL + key + '/attendance', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Coords: coords
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.Flag){
        dispatch({
          type: types.KQ_PUNCH,
          data: responseData.Content
        });
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

const loadAttendance = (key, id, date) => {

  return (dispatch) => {
    fetch(env.serverURL + key + '/attendance/'+ id + '?date=' + date)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: types.LOADED_KQ,
        data: responseData.Content
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

export {punch, loadAttendance};
