/*
 * 登录
*/

import * as types from './types';
import * as env from '../env';

const logIn = (account, password) => {

  return (dispatch) => {
    fetch(env.serverURL + 'android/Login/V2/android', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Email: account,
        Password: password
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.Flag){
        dispatch({
          type: types.LOGGED_IN,
          data: responseData.Content
        });
      }else{
        dispatch({
          type: types.LOGIN_FAIL,
          data: responseData.Content
        });
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };
};

const logOut = () => {
  return {
    type: types.LOGGED_OUT
  };
};

export {logIn, logOut};
