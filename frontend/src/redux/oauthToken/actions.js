import { SET_OAUTH_TOKEN, DELETE_OAUTH_TOKEN } from './actionTypes';

export const setOauthToken = token => ({
  type: SET_OAUTH_TOKEN,
  payload: token,
});

export const deleteOauthToken = () => ({
  type: DELETE_OAUTH_TOKEN,
});
