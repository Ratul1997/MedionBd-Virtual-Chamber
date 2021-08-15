import {userConstants} from '../constants/userConstants';

const initialState = {
  userDetails: {},
};

export default function docAuthReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.STORE_DOC_DETAILS:
      return {userDetails: action.user};
    case userConstants.REMOVE_DOC_DETAILS:
      return {userDetails: {}};
    default:
      return state;
  }
}
