import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR } from './Types';

// Get All Technicians
export const getTechs = () => async dispatch => {
  try {
    const res = await fetch('/techs');
    dispatch({ type: GET_TECHS, payload: await res.json() });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data });
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
    dispatch({ type: TECHS_ERROR, payload: err.message.data });
  }
};

// Delete Technicians
