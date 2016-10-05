//
// Component username form in login page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from 'components/Login/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class LoginFormUsernameFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
  }

  onChangeUsername(event) {
    this.props.usernameChange(event.target.value);
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.usernameError !== '') {
      validationState = 'error';
      errorMessage = this.props.usernameError;
    }

    return (
      <FormGroup controlId="username" className={styles.form} validationState={validationState}>
        <ControlLabel>Username</ControlLabel>
        <FormControl type="text" value={this.props.username} placeholder="Username" onChange={this.onChangeUsername} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

EditUserFormUsernameFormGroup.propTypes = {
  username: React.PropTypes.string,
  usernameError: React.PropTypes.string,
  usernameChange: React.PropTypes.func,
};
