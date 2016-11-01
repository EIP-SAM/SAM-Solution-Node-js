//
// Container table sofwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserTable } from 'components/SoftwaresByUser/Table';
import { showAddSoftwareModal } from './ModalAddSoftware/actions';
import { showUpdateSoftwareModal } from './ModalUpdateSoftware/actions';
import { showDeleteSoftwareModal } from './ModalDeleteSoftware/actions';
import {
  getSelectedSoftware,
  isAllCheckboxChecked,
} from './actions';

function mapStateToProps(state) {
  return {
    softwares: state.get('softwaresByUser').get('SoftwaresByUserReducer').softwares,
    selectedSoftwares: state.get('softwaresByUser').get('SoftwaresByUserTableReducer').selectedSoftwares,
    allChecked: state.get('softwaresByUser').get('SoftwaresByUserTableReducer').allChecked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSelectedSoftware: (selectedSoftwares) => dispatch(getSelectedSoftware(selectedSoftwares)),
    showAddSoftwareModal: () => dispatch(showAddSoftwareModal()),
    showUpdateSoftwareModal: () => dispatch(showUpdateSoftwareModal()),
    showDeleteSoftwareModal: () => dispatch(showDeleteSoftwareModal()),
    isAllCheckboxChecked: (allChecked) => dispatch(isAllCheckboxChecked(allChecked)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserTable);
