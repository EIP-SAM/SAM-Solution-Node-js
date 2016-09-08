//
// Modal to create an instant save in save page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/Save/Table/ModalInstantSave/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveInstantSaveModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleLaunchClick() {
    this.props.createSave(false, this.props.users, this.props.date, this.props.time, this.props.frequency, this.props.files);
    this.props.hideInstantSaveModal();
  }

  handleCancelClick() {
    this.props.resetStateForm();
    this.props.hideInstantSaveModal();
  }

  render() {
    return (
      <Modal show={this.props.showInstantSaveModal} onHide={this.handleCancelClick}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="floppy-open" className={styles.icon} />Instant save</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to launch save.</p>
          <p className={styles.bold}>Are you sure that you want to launch it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonType="info" buttonText="Launch" onClick={this.handleLaunchClick} />
            <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.handleCancelClick} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SaveInstantSaveModal.propTypes = {
  users: React.PropTypes.array,
  date: React.PropTypes.string,
  time: React.PropTypes.string,
  frequency: React.PropTypes.string,
  files: React.PropTypes.array,
  showInstantSaveModal: React.PropTypes.bool,
  hideInstantSaveModal: React.PropTypes.func,
  createSave: React.PropTypes.func.isRequired,
  resetStateForm: React.PropTypes.func,
};
