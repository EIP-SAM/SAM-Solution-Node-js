//
// App container
//

import { connect } from 'react-redux';
import App from 'components/App';
import {
  getUserInfo,
  setAppLoadingState,
} from './actions';

function getSafeIsLoading(state) {
  const isLoading = state.get('app').isLoading;
  return isLoading === undefined ? true : isLoading;
}

function mapStateToProps(state) {
  return {
    userInfo: state.get('app').userInfo,
    isLoading: getSafeIsLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
    setAppLoadingState: isLoading => dispatch(setAppLoadingState(isLoading)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
