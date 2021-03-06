import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/Stats/StatisticFilter/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class StatisticFilterComponent extends React.Component {
  componentDidMount() {
    this.props.getFiltersFromServer();
  }

  handleClick(type) {
    this.props.clearGraph();
    this.props.getGraphListByType(type.value);
  }

  render() {
    const filters = this.props.filters;
    if (!filters) {
      return null;
    }

    return (
      <ButtonToolbar className={styles.buttonBar}>
        {
          filters.map((value, index) => (
            <LinkContainerButton
              buttonText={value} buttonBsStyle="link"
              onClick={() => this.handleClick({ value })} key={index} link="#"
            />
          ))
        }
      </ButtonToolbar>
    );
  }
}

StatisticFilterComponent.propTypes = {
  getFiltersFromServer: React.PropTypes.func.isRequired,
  getGraphListByType: React.PropTypes.func.isRequired,
  clearGraph: React.PropTypes.func.isRequired,
  filters: React.PropTypes.arrayOf(React.PropTypes.string),
};
