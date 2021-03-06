//
// Component selected users form edit group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ButtonPopover from 'components/ButtonPopover';
import Option from 'components/Option';
import styles from 'components/EditGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class EditGroupFormSelectedUsers extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSelectedUsers = this.onChangeSelectedUsers.bind(this);
  }

  onChangeSelectedUsers(event) {
    const options = event.target.options;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push({ id: parseInt(options[i].value, 10), name: options[i].text });
      }
    }
    this.props.unselectedUsersOnChange(value);
  }

  render() {
    let selectedUsers = [];
    let selectedUsersOption = [];

    if (this.props.selectedUsers.length > 0) {
      selectedUsers = this.props.selectedUsers.map(user => (
        { value: user.id, text: user.name }
      ));
      selectedUsersOption = selectedUsers.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }
    return (
      <FormGroup controlId="selectedUsers" className={styles.form} >
        <ControlLabel>Selected Users</ControlLabel>
        <ButtonPopover
          id="selectedUsers"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select one or several users and remove them from the group using CTRL^ key"
          placement="right"
        />
        <FormControl componentClass="select" onChange={this.onChangeSelectedUsers} multiple>
          {selectedUsersOption}
        </FormControl>
      </FormGroup>
    );
  }
}

EditGroupFormSelectedUsers.propTypes = {
  selectedUsers: React.PropTypes.arrayOf(React.PropTypes.object),
  unselectedUsersOnChange: React.PropTypes.func,
};
