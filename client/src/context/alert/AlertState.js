import React, { useContext, useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from '../types';

// Custom hook to use state and dispatch
export const useAlert = () => {
  const { state, dispatch } = useContext(AlertContext);
  return [state, dispatch];
};

/*--------------------- ACTIONS -----------------------*/

// Set Alert
export const setAlert = (dispatch, message, type, timeout = 5000) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { message, type, id },
  });

  setTimeout(() => removeAlert(dispatch, id), timeout);
};

// Remove Alert
export const removeAlert = (dispatch, id) =>
  dispatch({
    type: REMOVE_ALERT,
    payload: id,
  });

// Clear Alerts
export const clearAlerts = dispatch => dispatch({ type: CLEAR_ALERTS });

/*------------------------- STATE ------------------------*/

const AlertState = props => {
  const initialState = {
    alerts: [],
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  return (
    <AlertContext.Provider
      value={{
        state: state,
        dispatch,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
