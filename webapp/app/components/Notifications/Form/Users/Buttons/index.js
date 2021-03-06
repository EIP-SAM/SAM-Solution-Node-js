//
// Component users buttons form notifications
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormUsersButtons extends React.Component {
  handleAddClick() {
    this.props.removeUsers(this.props.users, this.props.preSelectedUsers);
    this.props.addUsers(this.props.selectedUsers.concat(this.props.preSelectedUsers));
  }

  handleRemoveClick() {
    this.props.removeUsersSelected(this.props.selectedUsers, this.props.unselectedUsers);
    this.props.getUsers(this.props.users.concat(this.props.unselectedUsers));
  }

  render() {
    return (
      <ButtonToolbar className={styles.usersToolbar}>
        <LinkContainerButton buttonBsStyle="default" buttonStyle={styles.usersButtons} buttonText=">" onClick={() => this.handleAddClick()} />
        <LinkContainerButton buttonBsStyle="default" buttonStyle={styles.usersButtons} buttonText="<" onClick={() => this.handleRemoveClick()} />
      </ButtonToolbar>
    );
  }
}

NotificationsFormUsersButtons.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object),
  preSelectedUsers: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedUsers: React.PropTypes.arrayOf(React.PropTypes.object),
  unselectedUsers: React.PropTypes.arrayOf(React.PropTypes.object),
  getUsers: React.PropTypes.func,
  addUsers: React.PropTypes.func,
  removeUsers: React.PropTypes.func,
  removeUsersSelected: React.PropTypes.func,
};
