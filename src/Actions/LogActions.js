import {
  GET_LOGS,
  ADD_LOGS,
  DELETE_LOG,
  LOGS_ERROR,
  SET_CURRENT,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SET_LOADING,
  SEARCH_LOGS,
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
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Update Log
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(log),
    });
    dispatch({ type: UPDATE_LOG, payload: await res.json() });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Delete Log
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

// Search Logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    dispatch({ type: SEARCH_LOGS, payload: await res.json() });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Set Current for update
export const setCurrent = (currentLog) => {
  return { type: SET_CURRENT, payload: currentLog };
};

// clear current log
export const clearCurrent = () => {
  return { type: CLEAR_CURRENT };
};

// Set Loading: True
export const setLoading = () => {
  return { type: SET_LOADING };
};
