import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR
} from '../Actions/Types';

const initialState = {
  techs: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, techs: action.payload };

    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };

    // techs: state.techs.map(tech =>
    //   tech.id === action.payload.id ? action.payload : tech
    // )
    case TECHS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
