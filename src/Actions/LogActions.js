import { GET_LOGS, ADD_LOGS, SET_LOADING, LOGS_ERROR } from "./Types";

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

// Add New Log
export const addLog = (
  id,
  message,
  attention,
  tech,
  date = Date.now()
) => async (dispatch) => {
  try {
    setLoading();
    await fetch("/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, attention, tech, date }),
    });
    console.log({ id, message, attention, tech, date });
    dispatch({
      type: ADD_LOGS,
      payload: { id, message, attention, tech, date },
    });
    // console.log(res);
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Set Loading: True
export const setLoading = () => {
  return { type: SET_LOADING };
};
