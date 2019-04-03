import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
  // true when user logs in
  isAuthenticated: false,
  // user info when logged in
  user: {}

};

export default ( state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
    return {
      isAuthenticated: !!Object.keys(action.user).length,
      user: action.user
    };
    default:
      return state;
  }
}; 