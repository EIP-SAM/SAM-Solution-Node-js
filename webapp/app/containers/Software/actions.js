//
// Software Actions
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import { getAllUsers } from './Filters/actions';
import socket from 'utils/socket-io.js';
import { store } from 'app.js';

import {
  SOFTWARE_USERS_GET_USERS,
  SOFTWARE_USERS_REFRESH,
} from './constants';

export function getUsers(users) {
  return {
    type: SOFTWARE_USERS_GET_USERS,
    users,
  };
}

export function getRefresh(refresh) {
  return {
    type: SOFTWARE_USERS_REFRESH,
    refresh,
  };
}

export function getUsersOsRequest() {
  return function returnGetUsersRequest() {
    socket.emit('webapp_all_users');
  };
}

/* eslint-disable no-param-reassign */
socket.on('server_all_software', (data) => {
  const users = store.getState().get('software').get('SoftwareReducer').users;

  let i = 0;

  users.forEach((user) => {
    if (user.name === data.username) {
      user.os = data.operatingSystem;
    }
    i++;
  });

  store.dispatch(getUsers(users));
  store.dispatch(getRefresh(1));
});

/* eslint-disable no-param-reassign */
export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/restore')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        res.body.forEach((element) => {
          element.os = '';
        });

        dispatch(getUsers(res.body));
        dispatch(getAllUsers(res.body));
        dispatch(getUsersOsRequest());
      });
  };
}
