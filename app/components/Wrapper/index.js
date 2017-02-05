/**
 * Wrapper
 */

import React, { PropTypes } from 'react';

import styles from './styles.css';

function Wrapper(props) {
  return (
    <div className={ styles.wrapper }>
      { props.children }
    </div>
  );
}

Wrapper.propTypes = {
  className: PropTypes.string,
};

export default Wrapper;
