import { GET_ABOUT, ABOUT_ERROR, GET_VENUES, VENUES_ERROR } from '../types';

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
    case ABOUT_ERROR:
    case VENUES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
