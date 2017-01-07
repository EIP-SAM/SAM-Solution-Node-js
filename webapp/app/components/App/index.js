/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Navbar from 'containers/Navbar';
import { browserHistory } from 'react-router';
import Spinner from 'components/Spinner';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {
  componentWillMount() {
    this.props.setAppLoadingState(true);
    this.props.getUserInfo();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.userInfo && !nextProps.userInfo.logged
      && this.props.location.pathname !== '/login'
      && this.props.location.pathname !== '/forgotten-password') {
      browserHistory.push('/login');
    } else if (nextProps.userInfo && nextProps.userInfo.logged
      && this.props.location.pathname === '/login') {
      browserHistory.push('/dashboard');
    } else {
      this.props.setAppLoadingState(false);
    }
  }

  getAppContent() {
    if (this.props.isLoading) {
      return (
        <Spinner size={300} className={styles.spinner} />
      );
    }
    return (this.props.children);
  }

  render() {
    const content = this.getAppContent();
    const userInfo = this.props.userInfo;
    const navbar = (!this.props.isLoading && userInfo && userInfo.logged) ? <Navbar /> : (<span />);
    const appClass = (userInfo && userInfo.logged) ? styles.appBlock : '';

    return (
      <div className={appClass}>
        {navbar}
        <div className={styles.pageWrapper}>
          <Grid fluid>
            <Row>
              <Col lg={12}>
                {content}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  isLoading: React.PropTypes.bool,
  userInfo: React.PropTypes.object,
  location: React.PropTypes.object,
  getUserInfo: React.PropTypes.func,
  setAppLoadingState: React.PropTypes.func,
  setAppRedirectState: React.PropTypes.func,
};
