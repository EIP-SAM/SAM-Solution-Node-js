//
// Save History Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import { getUsers } from 'containers/Save/actions';
import request from 'utils/request';

import {
  GET_HISTORY_SAVES_BY_USER,
  SHOW_DELETION_SCHEDULED_SAVE_MODAL,
  SHOW_INSTANT_SAVE_MODAL,
  DELETE_SCHEDULED_SAVE_INFO,
} from './constants';

export function showDeletionScheduledSaveModal() {
  return {
    type: SHOW_DELETION_SCHEDULED_SAVE_MODAL,
    showDeletionModal: true,
  };
}

export function hideDeletionScheduledSaveModal() {
  return {
    type: SHOW_DELETION_SCHEDULED_SAVE_MODAL,
    showDeletionModal: false,
  };
}

export function showInstantSaveModal() {
  return {
    type: SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: true,
  };
}

export function hideInstantSaveModal() {
  return {
    type: SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: false,
  };
}

export function getHistorySavesByUser(saves) {
  return {
    type: GET_HISTORY_SAVES_BY_USER,
    saves,
  };
}

export function deleteScheduledSaveInfo(saveId, saveScheduledId, username) {
  return {
    type: DELETE_SCHEDULED_SAVE_INFO,
    saveId,
    saveScheduledId,
    username,
  };
}

export function getHistorySavesByUserRequest(username) {
  return function returnGetHistorySavesRequest(dispatch) {
    return request
      .get('/api/logged-in/history_save')
      .query({ username })
      .end((err, res) => {
        dispatch(getHistorySavesByUser(res.body));
        const users = [{ id: res.body[0].save_scheduled.user.id, name: res.body[0].save_scheduled.user.name }];
        dispatch(getUsers(users));
      });
  };
}

export function cancelSave(saveId, saveScheduledId, username) {
  return function returnCancelSave(dispatch) {
    return request
    .post('/api/logged-in/cancel_save')
    .type('form')
    .send({
      saveScheduledId,
      saveId,
    })
    .end(() => {
      dispatch(getHistorySavesByUserRequest(username));
    });
  };
}
