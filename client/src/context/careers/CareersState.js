import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import CareersContext from './careersContext';
import careersReducer from './careersReducer';

import { GET_POSITIONS, POSITIONS_ERROR } from '../types';

export const useCareers = () => {
  const { state, dispatch } = useContext(CareersContext);
  return [state, dispatch];
};

/*--------------------- ACTIONS -----------------------*/

export const getPositions = async dispatch => {
  try {
    const res = await axios.get('/api/careers');
    const positionsRaw = res.data;

    // Takes care of "venue" being a full "Venue" object, and only passes in the venue name (location)
    const positions = positionsRaw.map(position => ({
      _id: position._id,
      title: position.title,
      venue: position.venue.location,
      type: position.type,
      description: position.description,
    }));

    dispatch({
      type: GET_POSITIONS,
      payload: positions,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: POSITIONS_ERROR,
      payload: err.response.data.msg,
    });
  }
};

/*--------------------- STATE -----------------------*/

const CareersState = props => {
  const initialState = {
    positions: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(careersReducer, initialState);

  return (
    <CareersContext.Provider
      value={{
        state: state,
        dispatch,
      }}>
      {props.children}
    </CareersContext.Provider>
  );
};

export default CareersState;
