import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  CLEAR_ERRORS,
} from '../types';

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return [state, dispatch];
};

/*--------------------- ACTIONS -----------------------*/

// Axios config parameter
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Load User
export const loadUser = async dispatch => {
  try {
    const newUser = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: newUser.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const registerUser = async (dispatch, user) => {
  try {
    const token = await axios.post('/api/users', user, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: token.data,
    });

    loadUser(dispatch);
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// Login User
export const loginUser = async (dispatch, user) => {
  try {
    const token = await axios.post('/api/auth', user, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: token.data,
    });

    loadUser(dispatch);
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// Logout User
export const logoutUser = dispatch => {
  dispatch({
    type: LOGOUT_USER,
  });
};

// Clear Errors
export const clearErrors = dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

/*--------------------- STATE -----------------------*/

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  setAuthToken(state.token);

  // Load user when page loads
  if (state.loading) {
    loadUser(dispatch);
  }

  useEffect(() => {
    setAuthToken(state.token);
  }, [state.token]);

  return (
    <AuthContext.Provider
      value={{
        state: state,
        dispatch,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
