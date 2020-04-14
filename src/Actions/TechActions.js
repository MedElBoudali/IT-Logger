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
    setLoading();
    const res = await fetch('/techs');
    dispatch({ type: GET_TECHS, payload: await res.json() });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

// Add New Technician
export const addTech = Tech => async dispatch => {
  try {
    setLoading();
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

// Delete Technician by ID
export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, { method: 'DELETE' });
    dispatch({ type: DELETE_TECH, payload: id });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

// Set Loading: true
export const setLoading = () => {
  return { type: SET_LOADING_TECH };
};
