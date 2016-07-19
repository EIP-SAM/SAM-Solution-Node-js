import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/RestoreCreation/styles.css';
/* eslint-disable react/prefer-stateless-function */
export class RestoreCreationButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleFormClick() {
    this.props.resetState();
    this.props.createRestoresRequest(this.props.state, true);
  }

  handleCancelClick() {
    this.props.resetState();
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="info" buttonText="Restore" onClick={this.handleFormClick} />
        <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.handleCancelClick} />
      </ButtonToolbar>
    );
  }
}

RestoreCreationButtons.propTypes = {
  state: React.PropTypes.object,
  resetState: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
};
