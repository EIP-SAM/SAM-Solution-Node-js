//
// User software deletion modal softwares by user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  SOFTWARES_BY_USER_SHOW_DELETE_SOFTWARE_MODAL,
} from './constants';

export function showDeleteSoftwareModal() {
  return {
    type: SOFTWARES_BY_USER_SHOW_DELETE_SOFTWARE_MODAL,
    showModal: true,
  };
}

export function hideDeleteSoftwareModal() {
  return {
    type: SOFTWARES_BY_USER_SHOW_DELETE_SOFTWARE_MODAL,
    showModal: false,
  };
}
