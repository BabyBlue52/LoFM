import axios from 'axios';

import { returnErrors } from './messageAction';
import actionTypes from '../actionTypes';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: actionTypes.USER_LOADING });
  
     axios
      .get('https://dev.lofifm.com/api/info', tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: actionTypes.USER_LOADED,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: actionTypes.AUTH_ERROR,
        });
      });
  };

// LOGIN USER
export const login = (email, password) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json"
      },
    };
  
    // Request Body
    const body = {
      email: email,
      password: password
    }
    axios
      .post('https://dev.lofifm.com/api/login', body, config)
      .then(console.log(body))
      .then((res) => {
        if ( res.status === 200 ) {
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: res.data,
          })
          return res
        } else {
          dispatch(returnErrors(res.data, res.status))
          dispatch({
            type: actionTypes.LOGIN_FAIL,
          })
          return res
        }
      }) 
};

// REGISTER USER
export const register = ({ username, password, email }) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({ username, email, password });
  
    axios
      .post('https://dev.lofifm.com/api/user/create', body, config)
      .then((res) => {
        dispatch({
          type: actionTypes.REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err)
        // dispatch(returnErrors(err.response.data, err.response.status));
        // dispatch({
        //   type: actionTypes.REGISTER_FAIL,
        // });
      });
  };

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
    axios
      .post('https://dev.lofifm.com/api/auth/logout/', null, tokenConfig(getState))
      .then((res) => {
        dispatch({ type: 'CLEAR_LEADS' });
        dispatch({
          type: actionTypes.LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
  
// Setup config with token - helper function
export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
        'Content-Type': 'application/json',
        },
    };

    // If token, add to headers config
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};