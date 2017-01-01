//
// Migration History page Status select component
//

import React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Col
} from 'react-bootstrap';
import RadioGroup from 'components/RadioGroup';
import DatePicker from 'components/DatePicker';
import moment from 'moment';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class StatusSelect extends React.Component {
  componentWillMount() {
    if (!this.props.time) {
      this.props.setCreateTime(moment().format('HH:mm'));
    }
    if (!this.props.date) {
      this.props.setCreateDate(moment());
    }
  }

  handleTimeChange(e) {
    this.props.setCreateTime(moment(e.target.value, ['h:mm A']).format('HH:mm'));
  }

  render() {
    return (
      <div>
        <div className={ styles.headerModal }>
          <FormGroup controlId="migrationCreateIsPlanned" bsSize="small">
            <ControlLabel>Time :</ControlLabel>
            <RadioGroup
              className={styles.isPlannedRadio}
              placeholder={'Now'}
              values={['Now', 'Planned']}
              inline
              block={false}
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup controlId="time" className="clearfix">
            <Col sm={6}>
              <ControlLabel>Date</ControlLabel>
              <DatePicker value={this.props.date} onChange={this.props.setCreateDate} />
            </Col>
            <Col sm={6}>
              <ControlLabel>Time</ControlLabel>
              <FormControl type="time" value={this.props.time} onChange={this.handleTimeChange.bind(this)} />
            </Col>
          </FormGroup>
        </div>
      </div>
    );
  }
}

StatusSelect.propTypes = {
  date: React.PropTypes.string,
  time: React.PropTypes.string,
  setCreateDate: React.PropTypes.func,
  setCreateTime: React.PropTypes.func,
}
