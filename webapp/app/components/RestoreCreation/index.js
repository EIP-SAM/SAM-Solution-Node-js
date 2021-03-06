//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import RestoreCreationForm from 'containers/RestoreCreation/Form';

/* eslint-disable react/prefer-stateless-function */
export default class RestoreCreation extends React.Component {
  componentWillUnmount() {
    this.props.resetStateForm();
  }

  render() {
    return (
      <div>
        <PageHeader>Launch Restore</PageHeader>
        <RestoreCreationForm />
      </div>
    );
  }
}

RestoreCreation.propTypes = {
  resetStateForm: React.PropTypes.func,
};
