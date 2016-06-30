//
// Save Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

const request = require('superagent');

import {
  GET_SAVES,
} from './constants';

export function getSaves(saves) {
  return {
    type: GET_SAVES,
    saves,
  };
}

export function getSavesRequest() {
  return function returnGetSavesRequest(dispatch) {
    return request
    .post('http://localhost:8080/historySave')
    .type('form')
    .send({ username })
    .end((err, res) => {
      dispatch(getHistorySavesByUser(res.body));
      });
  };
}
