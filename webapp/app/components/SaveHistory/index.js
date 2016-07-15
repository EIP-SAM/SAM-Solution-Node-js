//
// Page history save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { SaveHistoryButtons } from 'components/SaveHistory/Buttons';
import { SaveHistoryTable } from 'components/SaveHistory/Table';
import styles from 'components/SaveHistory/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistory extends React.Component {

  componentDidMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getHistorySavesByUserRequest(username);
  }

  render() {
    return (
      <div>
        <PageHeader>Save</PageHeader>
        <PageHeader className={styles.title}><small>{window.location.pathname.split('/')[2]}</small></PageHeader>
        <SaveHistoryButtons
          dateSave={this.props.dateSave}
          timeSave={this.props.timeSave}
          frequencySave={this.props.frequencySave}
        />
        <SaveHistoryTable
          createSaveState={this.props.createSaveState}
          state={this.props.state}
          listUsers={this.props.listUsers}
          dateSave={this.props.dateSave}
          timeSave={this.props.timeSave}
          frequencySave={this.props.frequencySave}
          addAllFiles={this.props.addAllFiles}
          deleteScheduledSaveInfo={this.props.deleteScheduledSaveInfo}
          showDeletionScheduledSaveModal={this.props.showDeletionScheduledSaveModal}
          hideDeletionScheduledSaveModal={this.props.hideDeletionScheduledSaveModal}
          cancelSave={this.props.cancelSave}
          showInstantSaveModal={this.props.showInstantSaveModal}
          hideInstantSaveModal={this.props.hideInstantSaveModal}
          createSave={this.props.createSave}
        />
      </div>
    );
  }
}

SaveHistory.propTypes = {
  createSaveState: React.PropTypes.object,
  state: React.PropTypes.object,
  getHistorySavesByUserRequest: React.PropTypes.func,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addAllFiles: React.PropTypes.func,
  deleteScheduledSaveInfo: React.PropTypes.func,
  showDeletionScheduledSaveModal: React.PropTypes.func,
  hideDeletionScheduledSaveModal: React.PropTypes.func,
  cancelSave: React.PropTypes.func,
  showInstantSaveModal: React.PropTypes.func,
  hideInstantSaveModal: React.PropTypes.func,
  createSave: React.PropTypes.func,
};