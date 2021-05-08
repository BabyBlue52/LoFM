import actionTypes from '../actionTypes';

const initialState = {
    token: sessionStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case actionTypes.USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };

      case actionTypes.USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload,
        };

      case actionTypes.LOGIN_SUCCESS:
      case actionTypes.REGISTER_SUCCESS:
        sessionStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false,
        };

      case actionTypes.AUTH_ERROR:
      case actionTypes.LOGIN_FAIL:
      case actionTypes.LOGOUT_SUCCESS:
      case actionTypes.REGISTER_FAIL:
      case actionTypes.DELETE_USER:
        sessionStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false,
        };
        
      default:
        return state;
    }
  }