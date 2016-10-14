//
// Login actions
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
import { resetStateUsername } from './Username/actions';
import { resetStatePassword } from './Password/actions';


import {
  LOGIN,
  SET_USER_INFO,
} from './constants';

export function login(user) {
  return {
    type: LOGIN,
    user,
  };
}

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateUsername());
    dispatch(resetStatePassword());
  };
}

export function setUserInfo(logged, user) {
  return {
    type: SET_USER_INFO,
    userInfo: {
      logged,
      userId: user.id,
      username: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  };
}

export function resetUserInfo() {
  return {
    type: SET_USER_INFO,
    userInfo: {
      logged: false,
      userId: '',
      username: '',
      email: '',
      isAdmin: '',
    },
  };
}

export function loginRequest(username, password) {
  return function returnLoginRequest(dispatch) {
    console.log('LOGIN REQUEST');
    return request
      .post('/api/public/user/login/')
      .type('form')
      .send({ username, password })
      .end((err, res) => {
        if (!err && res.body.name) {
          dispatch(login(res.body));
          dispatch(setUserInfo(true, res.body));
          browserHistory.push(`/edit-user/${res.body.id}`);
        }
      });
  };
}

export function getUserInfo() {
  return function startAction(dispatch) {
    return request
      .get('/api/logged-in/user/profile')
      .end((err, res) => {
        if (!err) {
          dispatch(setUserInfo(true, res.body));
        } else {
          dispatch(resetUserInfo());
        }
      });
  };
}

export function logoutRequest() {
  return function startAction(dispatch) {
    return request
      .post('/api/logged-in/user/logout')
      .end((err) => {
        if (!err) {
          dispatch(resetUserInfo());
          browserHistory.push('/login');
        }
      });
  };
}
