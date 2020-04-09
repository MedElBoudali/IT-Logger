import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./Types";

// 1st Function structure
// export const getLogs = () => {
//   return async () => {
//     setLoading();
//     const res = await fetch("/logs");
//     const data = await res.json();
//     dispatch({ type: GET_LOGS, payload: data });
//   };
// };

// 2nd Function structure
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({ type: GET_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Set Loading: True
export const setLoading = () => {
  return { type: SET_LOADING };
};
