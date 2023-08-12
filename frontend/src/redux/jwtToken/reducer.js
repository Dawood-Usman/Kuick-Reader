import { SET_JWT_TOKEN, DELETE_JWT_TOKEN } from './actionTypes';

const initialState = null;

const jwtTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JWT_TOKEN:
      localStorage.setItem('jwtToken', action.payload);
      return action.payload;
    case DELETE_JWT_TOKEN:
      localStorage.removeItem('jwtToken');
      return null;
    default:
      return state;
  }
};

export default jwtTokenReducer;
