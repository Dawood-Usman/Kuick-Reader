import { combineReducers } from 'redux';
import jwtTokenReducer from './jwtToken/reducer';
import oauthTokenReducer from './oauthToken/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  jwtToken: jwtTokenReducer,
  oauthToken: oauthTokenReducer,
  user: userReducer,
});

export default rootReducer;
