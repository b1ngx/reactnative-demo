/*
 * 公告
*/

import * as types from './types';
import * as env from '../env';

const load = (key, id, page) => {
  return (dispatch) => {
    fetch(env.serverURL + key + '/announcement/list/' + id + '?status=-1&page=' + ( page || 1 ))
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: page ? types.LOADED_ANNOUNCE : types.REFRESH_ANNOUNCE,
        data: responseData.Content
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

export { load };
