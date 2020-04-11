import {
  GET_LOGS,
  ADD_LOGS,
  DELETE_LOG,
  SET_LOADING,
  LOGS_ERROR,
} from "../Actions/Types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case ADD_LOGS:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };
    case LOGS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
