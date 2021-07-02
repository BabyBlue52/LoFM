import axios from 'axios';

import { returnErrors } from './messageAction';
import actionTypes from '../actionTypes';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: actionTypes.USER_LOADING });
      
     axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/info`, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: actionTypes.USER_LOADED,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response, err.response));
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
      .post(`${process.env.REACT_APP_BASE_URL}/api/login`, body, config)
      .then(console.log(body))
      .then((res) => {
        if ( res.status === 200 ) {
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: res.data,
          })
          return res
        } else {
          console.log(res)
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
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json"
      },
    };
  
    // Request Body
    const body = { 
      username: username, 
      email: email, 
      password: password 
    };
  
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/user/create`, body, config)
      .then((res) => {
        if ( res.status === 201 ) {
          dispatch({
            type: actionTypes.REGISTER_SUCCESS,
            payload: res.data,
          });
          return res
        } else {
          console.log(res)
          dispatch(returnErrors(res.data, res.status));
          dispatch({
            type: actionTypes.REGISTER_FAIL,
          });
          return res
        }
      })
  };

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/auth/logout/`, null, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: actionTypes.LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
  
// DELETE USER
export const deleteUser = ({ userid }) => (dispatch, getState) => {
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
    user: userid 
  };  

  axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/auth/delete`, body, config)
      .then((res) => {
        dispatch({
          type: actionTypes.DELETE_USER,
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