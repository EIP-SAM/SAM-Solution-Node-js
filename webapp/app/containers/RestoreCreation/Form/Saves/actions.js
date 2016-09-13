//
// Saves form restore creation actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  GET_HISTORY_SAVES_BY_USER,
  SELECTED_SAVE,
  SAVE_ERROR,
} from './constants';


export function getHistorySavesByUser(allSaves) {
  return {
    type: GET_HISTORY_SAVES_BY_USER,
    allSaves,
  };
}

export function selectSave(saves) {
  return {
    type: SELECTED_SAVE,
    saves,
  };
}

export function saveErrorMsg(saveError) {
  return {
    type: SAVE_ERROR,
    saveError,
  };
}
