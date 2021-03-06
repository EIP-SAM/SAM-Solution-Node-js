//
// Restore history reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import InstantRestoreModalRestoreHistoryReducer from 'containers/RestoreHistory/Table/ModalInstantRestore/reducer';
import RESTORE_HISTORY_GET_HISTORY_RESTORES_BY_USER from './constants';

const initialState = {
  restores: [],
};

function RestoreHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case RESTORE_HISTORY_GET_HISTORY_RESTORES_BY_USER:
      return Object.assign({}, state, {
        restores: action.restores,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of save page
//
export default combineReducers({
  RestoreHistoryReducer,
  InstantRestoreModalRestoreHistoryReducer,
});
