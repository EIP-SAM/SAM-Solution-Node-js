//
// Notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import { resetStateDescription } from './Description/actions';
import { resetStateTitle } from './Title/actions';
import { resetStateAllUsers } from './Users/AllUsers/actions';
import { resetStateSelectedUsers } from './Users/SelectedUsers/actions';

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateTitle());
    dispatch(resetStateDescription());
    dispatch(resetStateAllUsers());
    dispatch(resetStateSelectedUsers());
  };
}

export function notificationRequest(title, description, selectedUsers) {
  const users = selectedUsers.map((user) => {
    return user.id;
  });

  const notification = [{
    title,
    description,
    users,
  }];

  return function returnNotificationRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/notification')
      .type('json')
      .send({ notification })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        dispatch(resetStateForm());
        browserHistory.goBack();
      });
  };
}