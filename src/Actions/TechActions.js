import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR } from "./Types";

export const getTechs = () => async (dispatch) => {
  try {
    const res = await fetch("/techs");
    dispatch({ type: GET_TECHS, payload: await res.json() });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data });
  }
};
