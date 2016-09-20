//
// Users table actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';
import { rebootAlert } from 'containers/Users/actions';

export function rebootUser(username) {
  return function rebootUserRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/reboot')
      .query({ username })
      .end(() => {
        dispatch(rebootAlert());
      });
  };
}