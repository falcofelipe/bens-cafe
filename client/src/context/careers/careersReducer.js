import {
  GET_POSITIONS,
  ADD_POSITION,
  UPDATE_POSITION,
  DELETE_POSITION,
  POSITION_ERROR,
} from '../types';

const careersReducer = (state, action) => {
  switch (action.type) {
    case GET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
        loading: false,
      };
    case ADD_POSITION:
      return {
        ...state,
        positions: [...state.positions, action.payload],
        loading: false,
      };
    case UPDATE_POSITION:
      return {
        ...state,
        positions: state.positions.map(position =>
          position._id === action.payload._id ? action.payload : position
        ),
        loading: false,
      };
    case DELETE_POSITION:
      return {
        ...state,
        positions: state.positions.filter(
          position => position._id !== action.payload
        ),
        loading: false,
      };
    case POSITION_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default careersReducer;
