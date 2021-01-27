import React, { useReducer, useContext } from 'react';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import CareersContext from './careersContext';
import careersReducer from './careersReducer';

export const useCareers = () => {
  const { state, dispatch } = useContext(CareersContext);
  return [state, dispatch];
};

const CareersState = props => {
  const initialState = {
    positions: [
      {
        id: 1,
        title: 'Waiter',
        venue: 'St. Kilda Rd.',
        type: 'part-time',
        description: `Our company is currently looking for a full-time qualified
        waiter to help us in our St. Kilda Rd. venue. The ideal
        candidate would have perfect english communicational skills,
        at least 6 months of experience on being a waiter in cafés or
        restaurants, and excellent presentation. Coffee-making
        abilities are a plus!`,
      },
      {
        id: 2,
        title: 'Kitchen Staff',
        venue: 'St. Kilda Rd.',
        type: 'full-time',
        description: `Our company is currently looking for a part-time kitchen staff
        to help us in our St. Kilda Rd. venue. The ideal candidate
        would have a passion for food and cooking, shown abilities to
        work very well in teams and follow orders, and impecable
        cleanliness.`,
      },
      {
        id: 3,
        title: 'FOH Manager',
        venue: 'Toorak Rd.',
        type: 'full-time',
        description: `Our company is currently looking for a Front-of-house manager
        to help us in our Toorak Rd. venue. The ideal candidate would
        have more than five years of experience in the area and at
        least one year of experience as a management role. He/she
        would also have excellent communicational and leadership
        skills. Excellent coffee-making skills are essential,
        including latte art!`,
      },
    ],
    loading: true,
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
