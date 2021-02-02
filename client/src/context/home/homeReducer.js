import { GET_CONTENT, CONTENT_ERROR } from '../types';

const homeReducer = (state, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        about: action.payload.about,
        venues: action.payload.venues,
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
