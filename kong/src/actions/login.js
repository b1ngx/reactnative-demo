/**
 * Created by BinG on 2016/6/28.
 */

import * as types from './types';

const LOGIN_URL = 'http://api.hr72.com/api/token?appid=yl1ec4b1ff655c5709&secret=4fd823ea538dcdc90afeeeac3bfc5b70';

const logIn = (username, password) => {

  console.log(username, password);

  return {
    type: types.LOGGED_IN,
    data: {
      name: username,
      token: password
    }
  };

  /*fetch(LOGIN_URL + '&username='+ username +'&password=' + password, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData.access_token);
    return {
      type: types.LOGGED_IN,
      data: {
        name: username,
        token: responseData.access_token
      }
    };
  })
  .catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  });*/
};

const logOut = () => {
  return {
    type: types.LOGGED_OUT
  };
};

export {logIn, logOut};