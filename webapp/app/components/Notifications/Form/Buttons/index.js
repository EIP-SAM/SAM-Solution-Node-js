//
// Component notifications form buttons
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormButtons extends React.Component {
  handleCreateClick(event) {
    event.preventDefault();
    const username = this.props.selectedUsers.map(user => (
      user.name
    ));
<<<<<<< HEAD
    if (this.props.title !== '' && this.props.description !== '' && this.props.selectedUsers.length != 0) {
      this.props.notificationRequest(this.props.title, this.props.description, this.props.persistence, username);
    } else if (this.props.title === '' && this.props.description === '' && this.props.selectedUsers.length == 0) {
=======
    if (this.props.title !== '' && this.props.description !== '' && this.props.selectedUsers.length !== 0) {
      this.props.notificationRequest(this.props.title, this.props.description, this.props.persistence, username);
    } else if (this.props.title === '' && this.props.description === '' && this.props.selectedUsers.length === 0) {
>>>>>>> 4ca1ba85acd5f33abd04add0824831aaa8aef649
      this.props.titleErrorMsg('A notification must have a title');
      this.props.descriptionErrorMsg('A notification must have a description');
      this.props.selectedUsersErrorMsg('At least one user must be selected');
    } else if (this.props.title === '' && this.props.description === '') {
      this.props.titleErrorMsg('A notification must have a title');
      this.props.descriptionErrorMsg('A notification must have a description');
<<<<<<< HEAD
    } else if (this.props.title === '' && this.props.selectedUsers.length == 0) {
      this.props.titleErrorMsg('A notification must have a title');
      this.props.selectedUsersErrorMsg('At least one user must be selected');
    } else if (this.props.description === '' && this.props.selectedUsers.length == 0) {
=======
    } else if (this.props.title === '' && this.props.selectedUsers.length === 0) {
      this.props.titleErrorMsg('A notification must have a title');
      this.props.selectedUsersErrorMsg('At least one user must be selected');
    } else if (this.props.description === '' && this.props.selectedUsers.length === 0) {
>>>>>>> 4ca1ba85acd5f33abd04add0824831aaa8aef649
      this.props.descriptionErrorMsg('A notification must have a description');
      this.props.selectedUsersErrorMsg('At least one user must be selected');
    } else if (this.props.title === '') {
      this.props.titleErrorMsg('A notification must have a title');
    } else if (this.props.description === '') {
      this.props.descriptionErrorMsg('A notification must have a description');
<<<<<<< HEAD
    } else if (this.props.selectedUsers.length == 0) {
=======
    } else if (this.props.selectedUsers.length === 0) {
>>>>>>> 4ca1ba85acd5f33abd04add0824831aaa8aef649
      this.props.selectedUsersErrorMsg('At least one user must be selected');
    }
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Send" onClick={event => this.handleCreateClick(event)} />
      </ButtonToolbar>
    );
  }
}

NotificationsFormButtons.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  persistence: React.PropTypes.bool,
  selectedUsers: React.PropTypes.arrayOf(React.PropTypes.object),
  notificationRequest: React.PropTypes.func,
  titleErrorMsg: React.PropTypes.func,
  descriptionErrorMsg: React.PropTypes.func,
  selectedUsersErrorMsg: React.PropTypes.func,
};
