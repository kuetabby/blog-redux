import { FETCH_POST, FETCH_USER } from "./constants";
import axiosFetch from "./axiosFetch";
import memoize from "lodash/memoize";

export const fetchPost = () => async dispatch => {
  const response = await axiosFetch.get("/posts").then(data => data.data);
  return dispatch({ type: FETCH_POST, payload: response });
};

export const userFetch = id => dispatch => {
  _userFetch(id, dispatch);
};

const _userFetch = memoize(async (id, dispatch) => {
  const response = await axiosFetch.get(`/users/${id}`).then(data => data.data);
  return dispatch({ type: FETCH_USER, payload: response });
});
