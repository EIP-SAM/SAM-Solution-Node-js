//
// Migration History table components
//

import React from 'react';
import { Table as TableBS } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Line from './Line';

const columns = [
  { isLink: false, value: '#' },
  { isLink: false, value: 'Status' },
  { isLink: false, value: 'Date' },
  { isLink: false, value: 'User' },
  { isLink: false, value: 'Image' },
  { isLink: false, value: 'Comment' },
  { isLink: false, value: 'Actions' },
];

/* eslint-disable react/prefer-stateless-function */
export default class Table extends React.Component {
  componentWillMount() {
    this.props.getAllMigrations();
  }

  render() {
    let statusFilter = this.props.statusFilter;
    if (!statusFilter) {
      statusFilter = 'all';
    }

    return (
      <div>
        <TableBS responsive hover striped>
          <thead>
            <Tr items={columns} component={Th} />
          </thead>
          <tbody>
            {
              this.props.migrations.map((migration, index) => {
                if (statusFilter === 'all' || migration.status === statusFilter) {
                  return <Line key={index} index={index} values={migration} />;
                }
                return undefined;
              }, this)
            }
          </tbody>
        </TableBS>
      </div>
    );
  }
}

Table.propTypes = {
  migrations: React.PropTypes.array,
  statusFilter: React.PropTypes.string,
  getAllMigrations: React.PropTypes.func,
};