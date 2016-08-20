//
// Save Creation Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  RESET_STATE,
  SHOW_ADD_FILE_MODAL,
  CAN_ADD_FILE,
  INPUT_FILE_CHANGE,
  LIST_USERS_ERROR,
  DATE_ERROR,
  TIME_ERROR,
  FREQUENCY_ERROR,
  ADD_FILE_ERROR,
} from './constants';

const initialState = {
  showModal: false,
  canAddFile: true,
  inputFileChange: '',
  userError: '',
  dateError: '',
  timeError: '',
  frequencyError: '',
  fileError: '',
};

function SaveHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return Object.assign({}, initialState, {
      });
    case SHOW_ADD_FILE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    case CAN_ADD_FILE:
      return Object.assign({}, state, {
        canAddFile: action.canAddFile,
      });
    case INPUT_FILE_CHANGE:
      return Object.assign({}, state, {
        inputFileChange: action.inputFileChange,
      });
    case LIST_USERS_ERROR:
      return Object.assign({}, state, {
        userError: action.userError,
      });
    case DATE_ERROR:
      return Object.assign({}, state, {
        dateError: action.dateError,
      });
    case TIME_ERROR:
      return Object.assign({}, state, {
        timeError: action.timeError,
      });
    case FREQUENCY_ERROR:
      return Object.assign({}, state, {
        frequencyError: action.frequencyError,
      });
    case ADD_FILE_ERROR:
      return Object.assign({}, state, {
        fileError: action.fileError,
      });
    default:
      return state;
  }
}

export default SaveHistoryReducer;