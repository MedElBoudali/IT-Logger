import {
  GET_LOGS,
  ADD_LOGS,
  DELETE_LOG,
  LOGS_ERROR,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  SEARCH_LOGS
} from '../Actions/Types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case ADD_LOGS:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        loading: false
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        ),
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };
    case SEARCH_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT:
      return { ...state, current: null };
    case LOGS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
