import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import CareersContext from './careersContext';
import careersReducer from './careersReducer';

import { GET_POSITIONS, POSITIONS_ERROR } from '../types';

export const useCareers = () => {
  const { state, dispatch } = useContext(CareersContext);
  return [state, dispatch];
};

/*--------------------- ACTIONS -----------------------*/

const managePositionsData = positionsRaw => {
  // Takes care of "venue" being a full "Venue" object, and only passes in the venue name (location)
  const positions = positionsRaw.map(position => ({
    _id: position._id,
    title: position.title,
    venue: position.venue.location,
    type: position.type,
    description: position.description,
  }));

  return positions;
};

/*--------------------- STATE -----------------------*/

const CareersState = props => {
  const initialState = {
    positions: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(careersReducer, initialState);

  useEffect(() => {
    let mounted = true;
    const source = axios.CancelToken.source();

    const fetchPositions = async () => {
      try {
        const positionsRaw = await axios.get('/api/careers', {
          cancelToken: source.token, //Needed for the cancellation
        });

        const positions = managePositionsData(positionsRaw.data);

        return positions;
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          console.error(error);

          dispatch({
            type: POSITIONS_ERROR,
            payload: error.response.data.msg,
          });
        }
      }
    };

    fetchPositions().then(positions => {
      if (mounted) {
        dispatch({
          type: GET_POSITIONS,
          payload: positions,
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
