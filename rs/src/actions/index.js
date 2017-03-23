import * as types from './types';

const logIn = (account, password) => {

  return (dispatch) => {
    fetch('http://www.hr72.com/api/account/login?appid=yk1ec4b1ff655c5709&secret=4fd823ea538dcdc90afeeeac3bfc5b70&username=410822198503207033&password=123456', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: types.LOGGED_IN,
        data: {
          account: account,
          token: responseData.access_token
        }
      });
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
