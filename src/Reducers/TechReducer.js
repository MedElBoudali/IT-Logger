import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING_TECH,
  TECHS_ERROR
} from '../Actions/Types';

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, techs: action.payload, loading: false };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      };
    case SET_LOADING_TECH:
      return { ...state, loading: true };
    case TECHS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
