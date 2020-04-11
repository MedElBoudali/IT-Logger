import {
  GET_LOGS,
  ADD_LOGS,
  DELETE_LOG,
  SET_LOADING,
  LOGS_ERROR,
} from "./Types";

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
    const res = await fetch("/logs?_sort=id&_order=desc", { method: "GET" });
    const data = await res.json();
    dispatch({ type: GET_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Add New Log
export const addLog = (Log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Log),
    });
    dispatch({
      type: ADD_LOGS,
      payload: await res.json(),
    });
    // console.log(res);
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Dlete Log
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Set Loading: True
export const setLoading = () => {
  return { type: SET_LOADING };
};
