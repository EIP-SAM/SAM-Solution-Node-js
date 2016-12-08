//
// Container for Migration History Delete component
//

import { connect } from 'react-redux';
import Delete from 'components/MigrationHistory/Delete';
import {
  setStatusDeleteMigrationModal,
} from './actions';

function mapStateToProps(state) {
  return {
    isPoppedUp: state.get('migrationHistory').get('delete').isPoppedUp,
    migration: state.get('migrationHistory').get('delete').migration,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeDeleteMigrationModal: () => dispatch(setStatusDeleteMigrationModal(false, null)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Delete);
