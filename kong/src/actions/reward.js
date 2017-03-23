/**
 * Created by BinG on 2016/6/1.
 */

import * as types from './types';

let REQUEST_URL = 'http://www.hr72.com/api/rewardhall/getlist?size=5';

const receive = (rewards) => {
    return {
        type: types.RECEIVE_DATA,
        rewards: rewards
    };
};

const fetchData = (page) => {
    return (dispatch) => {
        dispatch({
            type: types.REQUEST_DATA
        });
        fetch(REQUEST_URL + '&page=' + page)
            .then((response) => response.json())
            .then((responseData) => {
                dispatch(receive(responseData.Content));
            })
            .done();
    };
};

const refreshData = (page) => {
    return (dispatch) => {
        dispatch({
            type: types.REFRESH_DATA
        });
        fetch(REQUEST_URL + '&page=' + page)
            .then((response) => response.json())
            .then((responseData) => {
                dispatch(receive(responseData.Content));
            })
            .done();
    };
};

export {fetchData, refreshData};