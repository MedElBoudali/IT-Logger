import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING_TECH,
  TECHS_ERROR
} from './Types';

// Get All Technicians
export const getTechs = () => async dispatch => {
  try {
    const res = await fetch('/techs');
    dispatch({ type: GET_TECHS, payload: await res.json() });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

// Add New Technicians
export const addTech = Tech => async dispatch => {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Tech)
    });
    dispatch({ type: ADD_TECH, payload: await res.json() });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

// Delete Technicians
export const deleteTech = id => async dispatch => {
  try {
    await fetch(`/techs/${id}`, { method: 'DELETE' });
    dispatch({ type: DELETE_TECH, payload: id });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

// Set Loading
export const setLoading = () => {
  return { type: SET_LOADING_TECH };
};
