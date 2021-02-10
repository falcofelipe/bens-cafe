import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import HomeContext from './homeContext';
import homeReducer from './homeReducer';

import {
  GET_CONTENT,
  CONTENT_ERROR,
  GET_ABOUT,
  UPDATE_ABOUT,
  GET_VENUES,
  UPDATE_VENUE,
} from '../types';

export const useHome = () => {
  const { state, dispatch } = useContext(HomeContext);
  return [state, dispatch];
};

/*--------------------- STATE -----------------------*/

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

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
      type: CONTENT_ERROR,
      payload: err.response.data.msg,
    });
  }
};

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
      type: CONTENT_ERROR,
      payload: err.response.data.msg,
    });
  }
};

export const updateAbout = async (dispatch, updatedAbout) => {
  try {
    const about = await axios.put(`/api/about/`, updatedAbout, config);

    dispatch({
      type: UPDATE_ABOUT,
      payload: about.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: CONTENT_ERROR,
      payload: err.response.data.msg,
    });
  }
};

export const updateVenue = async (dispatch, updatedVenue) => {
  try {
    const venue = await axios.put(
      `/api/venues/${updatedVenue._id}`,
      updatedVenue,
      config
    );

    dispatch({
      type: UPDATE_VENUE,
      payload: venue.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: CONTENT_ERROR,
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

  useEffect(() => {
    // Variables to help prevent memory leak
    let mounted = true;
    const source = axios.CancelToken.source(); // Allows axios req cancellation

    const fetchContent = async () => {
      try {
        const about = await axios.get('/api/about', {
          cancelToken: source.token, //Needed for the cancellation
        });
        const venues = await axios.get('/api/venues', {
          cancelToken: source.token,
        });

        return { about: about.data, venues: venues.data };
      } catch (error) {
        // Do nothing if it's a cancel error
        if (axios.isCancel(error)) {
        } else {
          console.error(error);

          dispatch({
            type: CONTENT_ERROR,
            payload: error.response.data.msg,
          });
        }
      }
    };

    fetchContent().then(data => {
      if (mounted && data) {
        dispatch({
          type: GET_CONTENT,
          payload: { about: data.about, venues: data.venues },
        });
      }
    });

    // Cleanup to prevent memory leaks
    return function cleanup() {
      source.cancel();
      mounted = false;
    };
  }, []);

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
