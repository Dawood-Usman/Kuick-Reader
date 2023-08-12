import { SET_JWT_TOKEN, DELETE_JWT_TOKEN } from './actionTypes';

export const setJwtToken = token => ({
  type: SET_JWT_TOKEN,
  payload: token,
});

export const deleteJwtToken = () => ({
  type: DELETE_JWT_TOKEN,
});
