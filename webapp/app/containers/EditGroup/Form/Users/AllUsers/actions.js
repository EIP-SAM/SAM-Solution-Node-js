//
// All users form edit group actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  EDIT_GROUP_GET_USERS,
  EDIT_GROUP_PRE_SELECTED_USERS,
  EDIT_GROUP_REMOVE_USERS,
} from './constants';

export function getUsers(users) {
  return {
    type: EDIT_GROUP_GET_USERS,
    users,
  };
}

export function preSelectedUsersOnChange(preSelectedUsers) {
  return {
    type: EDIT_GROUP_PRE_SELECTED_USERS,
    preSelectedUsers,
  };
}

function removeUser(index, nextIndex) {
  return {
    type: EDIT_GROUP_REMOVE_USERS,
    index,
    nextIndex,
  };
}

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
export function removeUsers(users, preSelectedUsers) {
  return function returnRemoveUsers(dispatch) {
    for (const preSelectedUser of preSelectedUsers) {
      for (const user of users) {
        if (user.id === preSelectedUser.id) {
          const index = users.indexOf(user);
          let nextIndex = index + 1;
          let newUsers = users.slice(0, index);
          newUsers = users.slice(index + 1);

          if (newUsers.length === 0 && users.length > 1) {
            nextIndex = index - 1;
          } else if (newUsers.length === 0) {
            nextIndex = -1;
          }

          dispatch(removeUser(index, nextIndex));
          users = newUsers;
          break;
        }
      }
    }
  };
}
