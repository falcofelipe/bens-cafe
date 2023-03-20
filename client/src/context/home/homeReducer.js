import {
  GET_CONTENT,
  GET_ABOUT,
  UPDATE_ABOUT,
  GET_VENUES,
  UPDATE_VENUE,
  CONTENT_ERROR,
} from '../types';

const homeReducer = (state, action) => {
  switch (action.type) {
    case GET_ABOUT:
      return {
        ...state,
        about: action.payload,
        loading: false,
      };
    case GET_VENUES:
      return {
        ...state,
        venues: action.payload,
        loading: false,
      };
    case GET_CONTENT:
      return {
        ...state,
        about: action.payload.about,
        venues: action.payload.venues,
        loading: false,
      };
    case UPDATE_ABOUT:
      return {
        ...state,
        about: action.payload,
        loading: false,
      };
    case UPDATE_VENUE:
      return {
        ...state,
        venues: state.venues.map(venue =>
          venue._id === action.payload._id ? action.payload : venue
        ),
        loading: false,
      };
    case CONTENT_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
