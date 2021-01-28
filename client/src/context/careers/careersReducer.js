import { GET_POSITIONS, POSITIONS_ERROR } from '../types';

const careersReducer = (state, action) => {
  switch (action.type) {
    case GET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
        loading: false,
      };
    case POSITIONS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default careersReducer;
