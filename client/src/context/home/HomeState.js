import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import HomeContext from './homeContext';
import homeReducer from './homeReducer';

import { GET_ABOUT, ABOUT_ERROR, GET_VENUES, VENUES_ERROR } from '../types';

export const useHome = () => {
  const { state, dispatch } = useContext(HomeContext);
  return [state, dispatch];
};

/*--------------------- ACTIONS -----------------------*/

// Get About section
export const getAbout = async dispatch => {
  try {
    const about = await axios.get('/api/about');

    dispatch({
      type: GET_ABOUT,
      payload: about.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: ABOUT_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// Get Venues
export const getVenues = async dispatch => {
  try {
    const venues = await axios.get('/api/venues');

    dispatch({
      type: GET_VENUES,
      payload: venues.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: VENUES_ERROR,
      payload: err.response.data.msg,
    });
  }
};

/*--------------------- STATE -----------------------*/

const HomeState = props => {
  const initialState = {
    about: {},
    venues: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(homeReducer, initialState);

  return (
    <HomeContext.Provider
      value={{
        state: state,
        dispatch,
      }}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeState;
