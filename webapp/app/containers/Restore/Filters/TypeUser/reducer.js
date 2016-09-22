//
// Type user filter restore page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CURRENT_TYPE_USER,
} from './constants';

const initialState = {
  currentTypeUser: 'All',
};

function RestoreTypeUserFilterReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_TYPE_USER:
      return Object.assign({}, state, {
        currentTypeUser: action.currentTypeUser,
      });
    default:
      return state;
  }
}

export default RestoreTypeUserFilterReducer;
