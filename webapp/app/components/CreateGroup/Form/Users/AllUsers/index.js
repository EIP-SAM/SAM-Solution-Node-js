//
// Component all users form create group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Option from 'components/Option';
import styles from 'components/CreateGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateGroupFormUsersAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeAllUsers = this.onChangeAllUsers.bind(this);
  }

  componentWillMount() {
    this.props.getUsersRequest();
  }

  onChangeAllUsers(event) {
    console.log(event.target.value);
  }

  render() {
    let users = [];
    let usersOption = [];

    if (this.props.users.length > 0) {
      users = this.props.users.map((user) => (
        { value: user.id, text: user.name }
      ));
      usersOption = users.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }

    return (
      <FormGroup controlId="allUsers" className={styles.form} >
        <ControlLabel>All Users</ControlLabel>
        <ButtonPopover
          id="allUsers"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select one or several users and add them to the group"
          placement="right"
        />
        <FormControl componentClass="select" onChange={this.onChangeAllUsers} multiple>
          {usersOption}
        </FormControl>
      </FormGroup>
    );
  }
}

CreateGroupFormUsersAllUsers.propTypes = {
  users: React.PropTypes.array,
  getUsersRequest: React.PropTypes.func,
};
