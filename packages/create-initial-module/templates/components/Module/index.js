import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from "reactstrap";

import styles from './styles.module.css';

class Module extends Component {
  render() {
    return (
      <Container fluid className={styles.container}>
      </Container>
    )
  }
}

Module.propTypes = {
};

Module.defaultProps = {
};

export default Module;
