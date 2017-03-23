import * as types from './types';

const fetchData = (token, categoryId) => {

  return (dispatch) => {

    fetch('http://www.hr72.com/api/business?token=' + token + '&categoryId=' + categoryId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      dispatch({
        type: types.RECEIVE_DATA,
        data: responseData
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });

  };
};

export {fetchData};
