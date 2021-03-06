//
// Component password form in edit user page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from 'components/EditUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class EditUserFormPassword extends React.Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangePassword(event) {
    this.props.passwordChange(event.target.value);
  }

  render() {
    let validationState = null;

    if (this.props.passwordError !== '') {
      validationState = 'error';
    }

    return (
      <FormGroup controlId="password" className={styles.form} validationState={validationState}>
        <ControlLabel>Password</ControlLabel>
        <FormControl type="password" value={this.props.password} placeholder="Enter password" onChange={this.onChangePassword} />
        <HelpBlock>{this.props.passwordError}</HelpBlock>
      </FormGroup>
    );
  }
}

EditUserFormPassword.propTypes = {
  password: React.PropTypes.string,
  passwordError: React.PropTypes.string,
  passwordChange: React.PropTypes.func,
};
