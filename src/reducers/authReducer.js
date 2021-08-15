import {userConstants} from '../constants/userConstants';

const initialState = {
  loggedIn: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {loggedIn: true};
    case userConstants.LOGOUT:
      return {loggedIn: false};
    default:
      return state;
  }
}
