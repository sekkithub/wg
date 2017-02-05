import React, { PropTypes } from 'react';

import styles from './styles.css';

function P(props) {
  return (
    <p className={ styles.copy } { ...props }>
      { props.children }
    </p>
  );
}

P.propTypes = {
  className: PropTypes.string,
};

export default P;
