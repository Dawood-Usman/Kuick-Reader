import { SET_USER, DELETE_USER } from './actionTypes';

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = user => ({
  type: DELETE_USER,
  payload: user,
});
