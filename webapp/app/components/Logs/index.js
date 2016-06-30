//
// Logs page main components
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { LogFilter } from 'components/Logs/LogFilter';
import { LogResult } from 'components/Logs/LogResult';

/* eslint-disable react/prefer-stateless-function */
export class Log extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Logs</PageHeader>
        <LogFilter
          getAllLogs={this.props.getAllLogsRequest}
          getLimitLogs={this.props.getLimitLogsRequest}
          getFilteredLogs={this.props.getFilteredLogs}
          clearLogs={this.props.clearLogs}
        />
        <LogResult logs={this.props.logs.logs} />
      </div>
    );
  }
}

Log.propTypes = {
  logs: React.PropTypes.object.isRequired,
  getAllLogsRequest: React.PropTypes.func.isRequired,
  getLimitLogsRequest: React.PropTypes.func.isRequired,
  getFilteredLogs: React.PropTypes.func.isRequired,
  clearLogs: React.PropTypes.func.isRequired,
};
