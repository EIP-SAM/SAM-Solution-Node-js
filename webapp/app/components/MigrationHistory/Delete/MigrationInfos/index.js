//
// Migration History Delete infos component
//

import React from 'react';
import {
  Row,
  Col,
  Label,
} from 'react-bootstrap';
import moment from 'moment';
import styles from './styles.css';
import statusLabel from 'components/MigrationHistory/statusToLabel.json';

/* eslint-disable react/prefer-stateless-function */
export default class MigrationInfos extends React.Component {
  getFormatedDate(migration) {
    return moment(migration.migrationDate).format('YYYY MMMM Do HH:mm');
  }

  getStatusLabel(migration) {
    return (
      <Label bsStyle={statusLabel[migration.status]}>
        {migration.status}
      </Label>
    );
  }

  render() {
    const migration = this.props.migration;

    if (!migration) {
      return (<div />);
    }

    return (
      <div>
        <Row className={styles.infosRow}>
          <Col sm={3} className={styles.infosLeft}>Date:</Col>
          <Col sm={9}>{this.getFormatedDate(migration)}</Col>
        </Row>
        <Row className={styles.infosRow}>
          <Col sm={3} className={styles.infosLeft}>Status:</Col>
          <Col sm={9}>{this.getStatusLabel(migration)}</Col>
        </Row>
        <Row className={styles.infosRow}>
          <Col sm={3} className={styles.infosLeft}>User:</Col>
          <Col sm={9}>{migration.user.name}</Col>
        </Row>
        <Row className={styles.infosRow}>
          <Col sm={3} className={styles.infosLeft}>Image:</Col>
          <Col sm={9}>{migration.image.name}</Col>
        </Row>
        <Row className={styles.infosRow}>
          <Col sm={3} className={styles.infosLeft}>Comment:</Col>
          <Col sm={9}>{migration.comment}</Col>
        </Row>
      </div>
    );
  }
}

MigrationInfos.propTypes = {
  migration: React.PropTypes.object,
};
