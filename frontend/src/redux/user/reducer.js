import { SET_USER, DELETE_USER } from './actionTypes';

let initialState = null;
if(localStorage.getItem('user')) {
  initialState = {username: JSON.parse(localStorage.getItem('user')).username,
  email: JSON.parse(localStorage.getItem('user')).email,
  status: JSON.parse(localStorage.getItem('user')).status,}
}
else{
  initialState = {
    username : '',
    email: '',
    status: false,
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return action.payload;
    case DELETE_USER:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
