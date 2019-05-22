import { FETCH_POST, FETCH_USER } from "./constants";

const initial = {
  data: []
};
export const postReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
const initialUser = {
  data: []
};
export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};
