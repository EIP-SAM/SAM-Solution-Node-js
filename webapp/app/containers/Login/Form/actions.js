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
import { setUserInfo } from 'containers/App/actions';
import { resetStateUsername } from './Username/actions';
import { resetStatePassword } from './Password/actions';
import {
  LOGIN,
  LOGIN_SET_WRONG_CREDENTIALS,
} from './constants';

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateUsername());
    dispatch(resetStatePassword());
  };
}

export function login(user) {
  return {
    type: LOGIN,
    user,
  };
}

export function setWrongCredentials(wrongCredentials) {
  return {
    type: LOGIN_SET_WRONG_CREDENTIALS,
    wrongCredentials,
  };
}

export function loginRequest(username, password) {
  return function returnLoginRequest(dispatch) {
    return request
      .post('/api/public/user/login/')
      .type('form')
      .send({ username, password })
      .end((err, res) => {
        if (res.statusCode === 401) {
          dispatch(setWrongCredentials(true));
        }
        if (!err && res.body.name) {
          dispatch(login(res.body));
          dispatch(setUserInfo(true, res.body));
          dispatch(setWrongCredentials(false));
          browserHistory.push('/homepage');
        }
      });
  };
}
