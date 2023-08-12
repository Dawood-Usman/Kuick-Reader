import { SET_OAUTH_TOKEN, DELETE_OAUTH_TOKEN } from './actionTypes';

const initialState = null;

const oauthTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OAUTH_TOKEN:
      localStorage.setItem('oauthToken', action.payload);
      return action.payload;
    case DELETE_OAUTH_TOKEN:
      localStorage.removeItem('oauthToken');
      return null;
    default:
      return state;
  }
};

export default oauthTokenReducer;
