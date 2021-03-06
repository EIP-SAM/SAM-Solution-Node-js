//
// ForgottenPassword email form reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  FORGOTTEN_PASSWORD,
  FORGOTTEN_PASSWORD_SAVE_DATA,
} from './constants';

const initialState = { email: '' };

function forgottenPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case FORGOTTEN_PASSWORD:
      return Object.assign({}, state, {});
    case FORGOTTEN_PASSWORD_SAVE_DATA:
      return Object.assign({}, state, {
        email: action.email,
      });
    default:
      return state;
  }
}

export default forgottenPasswordReducer;
