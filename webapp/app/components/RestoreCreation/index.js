//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { RestoreCreationForm } from 'components/RestoreCreation/Form';

/* eslint-disable react/prefer-stateless-function */
export class RestoreCreation extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Launch Restore</PageHeader>
        <RestoreCreationForm
          state={this.props.state}
          getHistorySavesByUserRequest={this.props.getHistorySavesByUserRequest}
          nameUser={this.props.nameUser}
          listFiles={this.props.listFiles}
          selectFiles={this.props.selectFiles}
          listSaves={this.props.listSaves}
          createRestoresRequest={this.props.createRestoresRequest}
          setUserId={this.props.setUserId}
        />
      </div>
    );
  }
}

RestoreCreation.propTypes = {
  state: React.PropTypes.object,
  nameUser: React.PropTypes.func,
  setUserId: React.PropTypes.func,
  listFiles: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
  listSaves: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  getHistorySavesByUserRequest: React.PropTypes.func,
};
