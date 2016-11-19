//
// Migration History Buttons component
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton as Button } from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Buttons extends React.Component {
  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <Button
          buttonBsStyle="info"
          buttonText="Create Migration"
          link="#"
        />
      </ButtonToolbar>
    );
  }
}