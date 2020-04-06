import {AUTH_SUCCESS} from './types';
const queryString = require('query-string');

export const getToken = () => dispatch => {
    const parse = queryString.parse(window.location.search);
    const access_token = parse.access_token;
    dispatch({
        type: AUTH_SUCCESS,
        payload: access_token
    })
}